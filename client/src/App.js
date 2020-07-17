/*import React from "react"
function App(){
    return(
        <div>
            <h1>welcome</h1>
        </div>
    )
}
export default App*/
import React from "react"
import {BrowserRouter,Link,Route,Switch} from "react-router-dom"

import  {connect} from "react-redux"
import Register from './components/auth/Register'
import Login  from './components/auth/Login'
import Account from "./components/Account"
import {startUserLogout} from "./action/users"


function App(props){
  const handleLogout=()=>{
          props.dispatch(startUserLogout())
  }

    return(
      
        <BrowserRouter>
        

    <div className="container">
          <div className="row">
            
            <div className="col-md-4">
              
            <Link class="navbar-brand" to="/"> 
            
              
                <h2>welcome</h2>



 
           </Link>
          </div>
          <div className="col-md-8">
          <ul className="nav justify-content-end">


          {
  Object.keys(props.user).length!==0?(
    <React.Fragment>
                <li class="nav-item">

            <Link  className="nav-link"to="/users/account">Account</Link></li>
            <li class="nav-item">

             <Link className="nav-link" to="#" onClick={handleLogout}>Logout</Link></li>

            </React.Fragment>
          ):(
            <React.Fragment>
                        <li class="nav-item">

           <Link className="nav-link" to='/users/register'>Register</Link></li>
           <li class="nav-item">

          <Link className="nav-link" to='/users/login'>Login</Link></li>

            </React.Fragment>
          )
          

}
</ul>
</div>
           
</div>
           

            <Switch>
          
          <Route path='/users/register'component={Register}/>
          <Route path='/users/login'component={Login}/>
          <Route path='/users/account'component={Account}/>
         
          </Switch>
           </div>
          
          
          
      </BrowserRouter>
  
    )
}
const mapStateToProps=(state)=>{
  return{
  user:state.user
  }
}
export default connect(mapStateToProps) (App)