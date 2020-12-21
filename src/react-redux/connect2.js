import { useContext, useReducer, useMemo, useLayoutEffect } from "react";
import { bindActionCreators } from "redux";
import ReactReduxContext from "./ReactReduxContext";

function connect(mapState, mapDispatch) {
  return function (WrappedComponent) {
    return function (props) {
      const { store } = useContext(ReactReduxContext);
      const [_, forceUpdate] = useReducer((x) => x + 1, 0);
      const mapStateToProps = mapState(store.getState());
      const mapDispatchToProps = useMemo(() => {
        if (typeof mapDispatch === "object") {
          return bindActionCreators(mapDispatch, store.dispatch);
        } else if (typeof mapDispatch === "function") {
          return mapDispatch(store.dispatch);
        } else {
          return { dispatch: store.dispatch };
        }
      });
      useLayoutEffect(() => {
        store.subscribe(forceUpdate);
      }, []);
      return <WrappedComponent {...props} {...mapStateToProps} {...mapDispatchToProps} />;
    };
  };
}

export default connect;
