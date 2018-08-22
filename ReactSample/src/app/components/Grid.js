
import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';

const GridComponent = ({gridResponse}) => {
  return (
    
    <MDBDataTable
    responsive
    striped
    bordered
    hover
      data={gridResponse}
    />

    // <MDBTable autoWidth striped bordered hover>
    //   <MDBTableHead columns={gridResponse.columns}/>
    //   <MDBTableBody rows={gridResponse.rows} />
    // </MDBTable>
  );
}

export { GridComponent }
