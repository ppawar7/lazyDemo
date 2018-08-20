import React, { Component } from 'react'
import DropdownComponent from './DropDown'
import GridComponent from './Grid'


class DcLocations extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3 className="text-center">Infosys Developement Center</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <DropdownComponent />
            </div>
        </div>

       
            <GridComponent/>
          
      </div>
    )
  }
}


export { DcLocations }
