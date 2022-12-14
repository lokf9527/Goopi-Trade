import { Menu, Search } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import React from "react";
import algolia from "./utils/algolia";
import firebase from "./utils/firebase";

function Header({ user }) {
  const history = useHistory();
  const [inputValue, setInputValue] = React.useState("");
  const [results, setResults] = React.useState([]);

  function onSearchChange(e, { value }) {
    setInputValue(value);

    algolia.search(value).then((result) => {
      const searchResults = result.hits.map((hit) => {
        return {
          title: hit.title,
          description: hit.content,
          id: hit.objectID,
        };
      });
      setResults(searchResults);
    });
  }

  // 導引至所搜尋的文章
  function onResultSelect(e, { result }) {
    history.push(`/posts/${result.id}`);
  }

  return (
    <Menu>
      <Menu.Item as={Link} to="/posts">
        Goopi Trade
      </Menu.Item>
      <Menu.Item>
        <Search
          value={inputValue}
          onSearchChange={onSearchChange}
          results={results}
          noResultsMessage="找不到相關文章"
          onResultSelect={onResultSelect}
        />
      </Menu.Item>
      <Menu.Menu position="right">
        {user ? (
          <>
            <Menu.Item as={Link} to="/new-post">
              <Icon.Group>
                <Icon size="big" name="edit outline" />
              </Icon.Group>
            </Menu.Item>
            <Menu.Item as={Link} to="/my/posts">
              <Icon.Group>
                <Icon size="big" name="user circle" />
              </Icon.Group>
            </Menu.Item>
            <Menu.Item
              onClick={() => firebase.auth().signOut()}
              as={Link}
              to="/posts"
            >
              <Icon.Group>
                <Icon size="big" name="sign out" />
              </Icon.Group>
            </Menu.Item>
          </>
        ) : (
          <Menu.Item as={Link} to="/signin">
            註冊/登入
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
