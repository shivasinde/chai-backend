class ApiError extends Error{
  constructor(
    statuscode,
    message = "something went worng",
    errors = [],
    statck = ""
  ){
    super(message)
    this.statuscode = statuscode
    this.data = null
    this.errors = errors
    this.sussess = sussess
    this.message = message


    if(statck){
      this.stack = statck
    }else{
      Error.captureStackTrace(this,this.constructor)
    }

  }
}


export {ApiError}