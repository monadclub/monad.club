import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";

const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Time: GraphQLTime
  // TODO: Once this is resolved: https://github.com/dotansimha/graphql-code-generator/pull/1194
  // Profile: {
  //   __resolveType(obj: any) {
  //     if (obj.companyId) {
  //       return "CompanyUser";
  //     }

  //     return "Candidate";
  //   }
  // }
};

export default resolvers;
