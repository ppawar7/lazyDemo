import React, { Component } from 'react'
import DropdownComponent from './DropDown'
import jobMockResponse from '../MockData/JobPostData'
import { GridComponent } from './Grid'

class JobPostComponent extends Component {

    render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3 className="text-center">Infosys Developement Center</h3>
          </div>
        </div>
        <GridComponent gridResponse={jobMockResponse}/>
      </div>
    )
  }
}


export { JobPostComponent }
