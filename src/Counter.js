import React from "react";

import { connect } from "./react-redux";
import actions from "./store/actions";

function Counter(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.add}>加1</button>
    </div>
  );
}

const mapState = (state) => ({
  count: state.count,
});
export default connect(mapState, actions)(Counter);
