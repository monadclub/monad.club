import gql from "graphql-tag";

const schema = gql`
  type PaginatedSideProjects {
    pageInfo: PageInfo!
    edges: [SideProject]!
  }

  type SideProject {
    id: ID!
    title: String!
    url: String!
    startDate: Date!
    endDate: Date
    description: String!
  }

  extend type Query {
    sideProject(id: ID!): SideProject
    sideProjects(page: PageInput): PaginatedSideProjects!
  }

  # extend type Mutation {}
`;

export default schema;
