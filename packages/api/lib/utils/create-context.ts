import getLoaders from "../loaders";

const createContext = ({ req, ...context }: any) => ({
  ...context,
  req,
  loaders: getLoaders()
});

export default createContext;
