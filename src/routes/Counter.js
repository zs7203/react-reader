import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd-mobile'

const Counter = ({ count, dispatch }) => {
  return (
    <div>
      <p>{ count }</p>
      <Button
        onClick={() => dispatch({ type: "count/addAfter1Sec" })}
      >Add</Button>
    </div>
  )
}

export default connect(({ count }) =>({ count}))(Counter);
