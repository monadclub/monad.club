import * as React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const QUERY = gql`
  query Query {
    hello
  }
`;

const Index = () => (
  <Query query={QUERY}>
    {({ data }) => (
      <h1 style={{ color: "tomato" }}>Monad.club {data && data.hello}</h1>
    )}
  </Query>
);

export default Index;
