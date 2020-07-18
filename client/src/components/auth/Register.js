import React from "react"
import {connect} from "react-redux"
import {startRegister} from '../../action/users'

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            secondaryEmail:'',
            street:'',
            city:'',
            state:'',
            country:'',
            facebook:'',
            twitter:'',
            phone:'',
            mobile:'',
            description:'',
            ownerId:'',
            type:'',
            title:'',
            accountId:'',
            zip:''
          

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
         firstName:this.state.firstName,
          email:this.state.email,
          password:this.state.password,
          lastName:this.state.lastName,
          street:this.state.street,
          city:this.state.city,
          state:this.state.state,
          country:this.state.country,
          phone:this.state.phone,
          mobile:this.state.mobile,
          twitter:this.state.twitter,
          facebook:this.state.facebook,
          description:this.state.description,
          secondaryEmail:this.state.secondaryEmail,
          ownerId:this.state.ownerId,
          type:this.state.type,
          title:this.state.title,
          accountId:this.state.accountId,
          zip:this.state.zip
        }
        const contactObj={
//zip : "123902",
            lastName:this.state.lastName,
            country:this.state.country,
            secondaryEmail:this.state.secondaryEmail,
            city:this.state.city,
            facebook:this.state.facebook,
            mobile:this.state.mobile,
            description:this.state.description,
           /* ownerId:"18920000000560008",
            type : "paidUser",
            title : "The contact",
            accountId : "1892000000052077",*/
            ownerId:this.state.ownerId,
            type:this.state.type,
            title:this.state.title,
            accountId:this.state.accountId,
          
            firstName:this.state.firstName,
            twitter:this.state.twitter,
            phone:this.state.phone,
            street:this.state.street,
            state:this.state.state,
            email:this.state.email,
             


           }
           
console.log(formData,contactObj)
const redirect=()=>{
    this.props.history.push('/users/login')
}

this.props.dispatch(startRegister(formData,contactObj,redirect))
 
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h1 className="text-center">Register With us</h1>
                     
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                             
                             <input type="text" id="username" name="username" placeholder="username" value=
                             {this.state.username} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                      
                           <div className="form-group">
                             
                                <input type="text" id="firstName" name="firstName" placeholder="firstName" value=
                                {this.state.firstName} onChange=
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
                                <div className="form-group">
                             
                             <input type="text" id="lastName" name="lastName" placeholder="lastName" value=
                             {this.state.lastName} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="mobile" name="mobile" placeholder="mobile" value=
                             {this.state.mobile} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="phone" name="phone" placeholder="phone" value=
                             {this.state.phone} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="street" name="street" placeholder="street" value=
                             {this.state.street} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="city" name="city" placeholder="city" value=
                             {this.state.city} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="state" name="state" placeholder="state" value=
                             {this.state.state} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="country" name="country" placeholder="country" value=
                             {this.state.country} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="twitter" name="twitter" placeholder="twitter" value=
                             {this.state.twitter} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="facebook" name="facebook" placeholder="facebook" value=
                             {this.state.facebook} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="secondaryEmail" name="secondaryEmail" placeholder="secondaryEmail" value=
                             {this.state.secondaryEmail} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="description" name="description" placeholder="description" value=
                             {this.state.description} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="ownerId" name="ownerId" placeholder="ownerId" value=
                             {this.state.ownerId} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="type" name="type" placeholder="type" value=
                             {this.state.type} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="title" name="title" placeholder="title" value=
                             {this.state.title} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="accountId" name="accountId" placeholder="accountId" value=
                             {this.state.accountId} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                             
                               <div className="form-group">
                             
                             <input type="text" id="zip" name="zip" placeholder="zip" value=
                             {this.state.zip} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                            
                             
                             
                             
                       
                       
                         <button type="submit"  value="register"  className="btn btn-success btn-block">submit</button>
                                    
                                </form>
 
            </div>
            </div>
        )
    }
}
export default connect() (Register)