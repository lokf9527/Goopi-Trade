import React from "react";
import { Item, Header } from "semantic-ui-react";

import Post from "../components/Post";
import firebase from "../utils/firebase";

function MyCollections() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection("posts")
      .where("collectedBy", "array-contains", firebase.auth().currentUser.uid)
      .get()
      .then((collectionSnapshot) => {
        const data = collectionSnapshot.docs.map((docSnapshot) => {
          const id = docSnapshot.id;
          return { ...docSnapshot.data(), id };
        });
        setPosts(data);
      });
  }, []);
  return (
    <>
      <Header>ζηζΆθ</Header>
      <Item.Group>
        {posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </Item.Group>
    </>
  );
}

export default MyCollections;
