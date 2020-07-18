import React from "react"
import {connect} from "react-redux"
import {startcreateTicket}from "../action/tickets"
class TicketNew extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productId:'',
            contactId:this.props.user.id,
            subject:"",
            dueDate:'',
            departmentId:'',
            channel:'',
            description:'',
            priority:'',
            classification:'',
            assigneeId:'',
            phone:this.props.user.phone,
            category:'',
            email:this.props.user.email,
            status:''
           
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
            productId : this.state.productId,
            contactId : this.state.contactId,
            subject : this.state.subject,
            dueDate: this.state.dueDate,
            departmentId : this.state.departmentId,
            channel : this.state.channel,
            description : this.state.description,
            priority : this.state.priority,
            classification :this.state.classification,
            assigneeId : this.state.assigneeId,
            phone : this.state.phone,
            category : this.state.category,
            email : this.state.email,
            status : this.state.status
             }
        const ticketObj={
            productId : this.state.productId,
            contactId : this.state.contactId,
            subject : this.state.subject,
            dueDate: this.state.dueDate,
            departmentId : this.state.departmentId,
            channel : this.state.channel,
            description : this.state.description,
            priority : this.state.priority,
            classification :this.state.classification,
            assigneeId : this.state.assigneeId,
            phone : this.state.phone,
            category : this.state.category,
            email : this.state.email,
            status : this.state.status
             
        


           }
           
console.log(formData,ticketObj)
const redirect=()=>{
    this.props.history.push('/users/TicketList')
}

this.props.dispatch(startcreateTicket(formData,ticketObj,redirect))
 
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h1 className="text-center">create Ticket</h1>
                     
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                             
                             <input type="text" id="productId" name="productId" placeholder="productId" value=
                             {this.state.username} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                      
                           <div className="form-group">
                             
                                <input type="text" id="subject" name="subject" placeholder="subject" value=
                                {this.state.subject} onChange=
                                  {this.handleChange}
                                        className="form-control"
                                  />
                                  </div>
                                 
                                 <div className="form-group">
                                 <input type="text" name="dueDate" placeholder="dueDate" value=
                                {this.state.dueDate} onChange=
                                {this.handleChange} className="form-control"/> 
                                 </div>
                                 <div className="form-group">
                                 <input type="departmentId" name="departmentId" placeholder="departmentId" value=
                                {this.state.departmentId} onChange=
                                {this.handleChange} className="form-control"/> 
                                </div>
                                <div className="form-group">
                             
                             <input type="text" id="channel" name="channel" placeholder="channel" value=
                             {this.state.channel} onChange=
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
                             
                             <input type="text" id="priority" name="priority" placeholder="priority" value=
                             {this.state.priority} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="classification" name="classification" placeholder="classification" value=
                             {this.state.classification} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="assigneeId" name="assigneeId" placeholder="assigneeId" value=
                             {this.state.city} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="category" name="category" placeholder="category" value=
                             {this.state.category} onChange=
                               {this.handleChange}
                                     className="form-control"
                               />
                               </div>
                               <div className="form-group">
                             
                             <input type="text" id="status" name="status" placeholder="status" value=
                             {this.state.status} onChange=
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
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        user:state.user,
  //  user:state.user

    }
}

export default connect(mapStateToProps) (TicketNew)