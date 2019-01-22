import React from "react";
import Head from "next/head";
import { getDataFromTree } from "react-apollo";
import App, { NextAppContext } from "next/app";
import { ApolloClient } from "apollo-boost";
import { logError } from "@monad.club/utils";
import initApollo from "./init-apollo";

export interface IProps {
  apolloState: any;
}

const withApolloClient = (NextApp: any /* TODO: Type! */) =>
  class Apollo extends React.Component<IProps> {
    static displayName = "withApollo(App)";

    apolloClient: null | ApolloClient<any> = null;

    static async getInitialProps(ctx: NextAppContext) {
      const { Component, router } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo(ctx);
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <NextApp
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (error) {
          logError("Error while running `getDataFromTree`", error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }

    constructor(props: IProps) {
      super(props);
      this.apolloClient = initApollo(this.context || {}, props.apolloState);
    }

    render() {
      return <NextApp {...this.props} apolloClient={this.apolloClient} />;
    }
  };

export default withApolloClient;
