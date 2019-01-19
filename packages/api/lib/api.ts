import { ApolloServer } from 'apollo-server';
import gql from 'graphql-tag';
import { withEmoji } from '@monad.club/utils';

const server = new ApolloServer({
	typeDefs: gql`
		type Query {
			hello: String
		}
	`,
	resolvers: {
		Query: {
			hello: () => withEmoji('heya there')
		}
	}
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
	console.log(`GraphQL server started http://localhost:${port}`);
});
