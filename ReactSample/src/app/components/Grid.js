
import React from 'react';
import { MDBDataTable } from 'mdbreact';

const GridComponent = ({gridResponse}) => {
  return (
    <MDBDataTable
      striped
      hover
      data={gridResponse}
    />
  );
}

export { GridComponent }
