import gql from "graphql-tag";

const schema = gql`
  type PaginatedExperiences {
    pageInfo: PageInfo!
    edges: [Experience]!
  }

  type Experience {
    id: ID!
  }

  extend type Query {
    experience(id: ID!): Experience
    experiences(page: PageInput): PaginatedExperiences!
  }

  # extend type Mutation {}
`;

export default schema;
