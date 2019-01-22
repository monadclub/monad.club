import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import fetch from "isomorphic-unfetch";
import { get } from "lodash/fp";
import { NextContext } from "next";

let apolloClient: ApolloClient<any> | null = null;
if (!process.browser) {
  global.fetch = fetch;
}

const getNowUrl: (ctx: NextContext) => string | undefined = get(
  "req.headers.host"
);

const getHost = (ctx: NextContext) => {
  const nowUrl = getNowUrl(ctx);
  if (process.env.NODE_ENV === "production") {
    if (nowUrl) return `https://${nowUrl}`;
    return "";
  }
  return "http://localhost:4000";
};

const create = (ctx: any, initialState?: any) =>
  new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: getHost(ctx),
      credentials: "same-origin"
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });

const initApollo = (ctx: any, initialState?: any) => {
  if (!process.browser) {
    return create(ctx, initialState);
  }
  if (!apolloClient) {
    apolloClient = create(ctx, initialState);
  }

  return apolloClient;
};

export default initApollo;
