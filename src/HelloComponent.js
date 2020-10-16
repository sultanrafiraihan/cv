import React, { useState } from 'react';

const HelloComponent = () => {
  const [name, setName] = useState('sultan');
  return (
    <div>
      <h2>Hello world my name is {name}</h2>
      <button
        type="submit"
        onClick={() => {
          setName('bagus');
        }}
      >
        {' '}
        ganti nama{' '}
      </button>
    </div>
  );
};

export default HelloComponent;
