import gql from "graphql-tag";

const schema = gql`
  type PaginatedSkills {
    pageInfo: PageInfo!
    edges: [Skill]!
  }

  type Skill {
    id: ID!
  }

  extend type Query {
    skill(id: ID!): Skill
    skills(page: PageInput): PaginatedSkills!
  }

  # extend type Mutation {}
`;

export default schema;
