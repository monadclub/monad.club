import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import { withEmoji } from '@monad.club/utils';

const Index = ({ text }: any) => {
	return <h1 style={{ color: 'tomato' }}>Monad.club, {withEmoji(text)}.</h1>;
};

const getHost = ({ req }: any) => {
	if (process.env.NODE_ENV === 'production') {
		if (req.headers.host) return `https://${req.headers.host}/graphql`;
		return '/graphql';
	}
	return 'http://localhost:4000';
};

Index.getInitialProps = async (ctx: any) => {
	const data = await fetch(getHost(ctx), {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow',
		referrer: 'no-referrer',
		body: JSON.stringify({
			operationName: 'books',
			variables: {},
			query: 'query books { hello }'
		})
	});
	return { text: (await data.json()).data.hello };
};

export default Index;
