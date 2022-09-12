import algoliasearch from "algoliasearch";

const client = algoliasearch("787YUZ8OWS", "1f3f3bd459c33b851ff3da282750d6ce");

const algolia = client.initIndex("goopitrade");

export default algolia;
