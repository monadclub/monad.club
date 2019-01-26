import getLoaders from "../loaders";
import { IContext } from "../types/custom";

const createContext = (_: any): IContext => ({
  userId: "TODO",
  loaders: getLoaders()
});

export default createContext;
