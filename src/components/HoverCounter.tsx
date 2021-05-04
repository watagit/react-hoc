import React, { VFC } from 'react';
import HigherOrderComponent, { Props } from './HigherOrderComponent';

const HoverCounter: VFC<Props> = ({ count, incrementCount }) => {
  return (
    <div>
      <h3 onMouseOver={incrementCount}>
        Hover {count} times
      </h3>
    </div>
  );
};

export default HigherOrderComponent(HoverCounter);
