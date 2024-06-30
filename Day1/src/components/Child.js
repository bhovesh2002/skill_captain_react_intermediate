import React from 'react';
import Grandchild from './Grandchild';

function Child(props) {
  return (
    <div>
      <p>Data from Child: {props.data}</p>
      <Grandchild data={props.data} />
    </div>
  );
}

export default Child;