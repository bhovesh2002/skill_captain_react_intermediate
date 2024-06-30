import React from 'react';
import Child from './Child';

function Parent() {
  const data = 'Hello from Parent';

  return (
    <div>
      <p>Data from Parent: {data}</p>
      <Child data={data} />
    </div>
  );
}

export default Parent;