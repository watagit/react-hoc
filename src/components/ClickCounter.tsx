import React, { VFC } from 'react';
import HigherOrderComponent from './HigherOrderComponent';

interface Props {
  count: number;
  incrementCount: () => void;
}

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
