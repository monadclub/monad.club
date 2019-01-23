import gql from "graphql-tag";

const typeDefs = gql`
  enum RemoteOptions {
    REMOTE_ONLY
    FLEXIBLE
    ON_PREMISE
  }

  type Image {
    id: ID!
    secureUrl: String!
    # ...
  }

  type PageInfo {
    limit: Int!
    offset: Int!
    totalItems: Int!
  }

  input PaginationInput {
    limit: Int
    offset: Int
  }

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export { typeDefs };
