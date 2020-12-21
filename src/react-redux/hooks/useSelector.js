import { useContext, useReducer, useLayoutEffect } from "react";
import ReactReduxContext from "../ReactReduxContext";

const refEquality = (a, b) => a === b;

function useSelectorWithStore(selector, equalityFn, store, subscription) {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  useLayoutEffect(() => {
    subscription.addSubscribe(forceUpdate);
  }, []);

  return selector(store.getState());
}

function useSelector(selector, equalFn) {
  const { store, subscription } = useContext(ReactReduxContext);
  const selectedState = useSelectorWithStore(selector, refEquality, store, subscription);

  return selectedState;
}

export default useSelector;
