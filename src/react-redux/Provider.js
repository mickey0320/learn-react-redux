import ReactReduxContext from "./ReactReduxContext";
import Subscription from "./Subscription";

function Provider(props) {
  const { store } = props;
  const subscription = new Subscription(store);
  return <ReactReduxContext.Provider value={{ store, subscription }}>{props.children}</ReactReduxContext.Provider>;
}

export default Provider;
