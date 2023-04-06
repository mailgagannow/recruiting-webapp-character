import React from 'react';

const AttributesModifier = (props) => {
  const { increment, decrement, name, value, index } = props;
  return (
    <div key={index}>
      <p
        style={{
          color: 'white',
        }}
      >
        {name} : {value}
      </p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default AttributesModifier;
