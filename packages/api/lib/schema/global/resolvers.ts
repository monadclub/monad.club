import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";

const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Time: GraphQLTime,
  Profile: {
    __resolveType(obj: any) {
      if (obj.companyId) {
        return "CompanyUser";
      }

      return "Candidate";
    }
  }
};

export default resolvers;
