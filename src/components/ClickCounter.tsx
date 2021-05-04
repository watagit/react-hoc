import React, { VFC } from 'react';
import HigherOrderComponent, { Props } from './HigherOrderComponent';

const ClickCounter: VFC<Props> = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>
        clicked {count} times
      </button>
    </div>
  );
};

export default HigherOrderComponent(ClickCounter);
