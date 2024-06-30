import React from 'react';

function Grandchild(props) {
  return (
    <div>
      <p>Data from Grandchild: {props.data}</p>
    </div>
  );
}

export default Grandchild;