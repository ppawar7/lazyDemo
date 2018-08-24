import React, { Component } from 'react'
import DropdownComponent from './DropDown'
import { jobMockResponse } from '../MockData/JobData'
import { GridComponent } from './Grid'
import { setJobData } from '../actions/index'
import { store } from '../store'

class JobPostComponent extends Component {

  componentDidMount() {
    store.dispatch(setJobData(jobMockResponse));
  }

  render() {
    console.log(this.props.jobPostData);
    if(Object.keys(this.props.jobPostData).length){
      return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="text-center">Infosys Developement Center</h3>
            </div>
          </div>
          
          <GridComponent gridResponse={this.props.jobPostData} />
        </div>
      )
    }else{
      return (<div>Loading </div>)
    }
    
  }
}


export { JobPostComponent }
