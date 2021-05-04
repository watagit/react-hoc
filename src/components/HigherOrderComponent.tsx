import React, { useState } from 'react';

const HigherOrderComponent = OriginalComponent => {
  return () => {
    const [count, setCount] = useState<number>(0);

    const incrementCount = () => {
      setCount(prevState => prevState + 1);
    }

    return (
      <OriginalComponent count={count} incrementCount={incrementCount}/>
    );
  };
}

export default HigherOrderComponent;
