import React from "react"
import {connect} from "react-redux"
import {startRegister} from '../../action/users'

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''
        }
        
    }
    handleChange=(e)=>{
        
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
         username:this.state.username,
          email:this.state.email,
          password:this.state.password
}
console.log(formData)
const redirect=()=>{
    this.props.history.push('/users/login')
}

this.props.dispatch(startRegister(formData,redirect))

    }

    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h1 className="text-center">Register With us</h1>
                     
                <form onSubmit={this.handleSubmit}>
                           <div className="form-group">
                             
                                <input type="text" id="username" name="username" placeholder="userName" value=
                                {this.state.username} onChange=
                                  {this.handleChange}
                                        className="form-control"
                                  />
                                  </div>
                                 
                                 <div className="form-group">
                                 <input type="text" name="email" placeholder="email" value=
                                {this.state.email} onChange=
                                {this.handleChange} className="form-control"/> 
                                 </div>
                                 <div className="form-group">
                                 <input type="password" name="password" placeholder="password" value=
                                {this.state.password} onChange=
                                {this.handleChange} className="form-control"/> 
                                </div>



                              <button type="submit"  value="register"  className="btn btn-success btn-block">submit</button>
                                    
                                </form>
 
            </div>
            </div>
        )
    }
}
export default connect() (Register)