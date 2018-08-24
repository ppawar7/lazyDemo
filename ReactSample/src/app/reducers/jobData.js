const jobData = (state = {}, action) => {
    switch (action.type) {
      case 'SET_JOB_DATA':
        return Object.assign(...state,  action.jobPostData)
  
      default:
        return state
    }
  }
  
  export default jobData 
  