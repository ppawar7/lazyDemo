import React from 'react'
import { connect } from 'react-redux'
import { JobPostComponent } from '../components/JobPost'


const mapStateToProps = (state, ownProps) => ({
    jobPostData: state.jobData
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    // onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const JobPostContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(JobPostComponent)

export { JobPostContainer } 
