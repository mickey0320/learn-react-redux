import React from "react";
import { bindActionCreators } from "redux";

import ReactReduxContext from "./ReactReduxContext";

function connect(mapState, mapDispatch) {
  return function (WrappedComponent) {
    return class ConnectComponent extends React.Component {
      static contextType = ReactReduxContext;
      state = {};
      constructor(props, context) {
        super(props);
        this.state = mapState(context.store.getState());
      }
      componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() => {
          this.setState(mapState(this.context.store.getState()));
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const mapDispatchToProps = bindActionCreators(mapDispatch, this.context.store.dispatch);
        return <WrappedComponent {...this.props} {...this.state} {...mapDispatchToProps} />;
      }
    };
  };
}

export default connect;
