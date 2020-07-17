import React from "react"
import {connect}from 'react-redux' 
import {startLogin}from '../../action/users'
import {Link} from "react-router-dom"

class Login extends React.Component{
    constructor(){
        super()
        this.state={

                    
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
        password:this.state.password,
         email:this.state.email
}
const redirect=()=>{
this.props.history.push('/')
}
this.props.dispatch(startLogin(formData,redirect))

    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h1 className="text-center">Login With Us</h1>
                <form onSubmit={this.handleSubmit}>
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



                             <button type="submit"  value="login" className="btn btn-success btn-block">submit</button>
                               <p className="text-center">or</p>
                               <p className="text-center"><Link to="/users/register" >create a account</Link></p>
                                   
                               </form>
                   </div>
            </div>
        )
    }
}
export default connect() (Login)