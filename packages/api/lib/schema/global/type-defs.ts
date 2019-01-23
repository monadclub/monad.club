import gql from "graphql-tag";

const typeDefs = gql`
  scalar Date
  scalar DateTime
  scalar Time

  enum RemoteOptions {
    REMOTE_ONLY
    FLEXIBLE
    ON_PREMISE
  }

  enum EmploymentTypes {
    CONTRACT
    PERMENANT
    BOTH
  }

  # Pagination page data
  type PageInfo {
    limit: Int!
    offset: Int!
    totalItems: Int!
  }

  # Pagination input variable structure
  input PageInput {
    limit: Int
    offset: Int
  }

  # Raw cloudinary image - maps one-to-one with table
  type CloudinaryImage {
    id: ID!
    format: String!
    height: Float!
    width: Float!
    publicId: String!
    version: Int!
    secureUrl: String!
  }

  # Requesting 'me' from the API will return one of the two
  union Profile = Candidate | CompanyUser

  # Root Query will be extended in other files
  # Query can't be empty so this is just a dud
  type Query {
    me: Profile!
  }

  # Root Mutation will be extended in other files
  # Mutation can't be empty so this is just a dud
  type Mutation {
    _empty: String
  }
`;

export default typeDefs;
