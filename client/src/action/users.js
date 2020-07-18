import axios from '../config/axios'
import Swal from "sweetalert2"
import Axios from "axios"
export const startRegister=(formData,contactObj,redirect)=>{
    return (dispatch)=>{
        axios.post('/users/register',formData)
        .then((response)=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
             //   alert(response.data.message)
             const displayMessages=[]
             for(const key in response.data.errors){
                 displayMessages.push(response.data.errors[key].message)
             
             }
             
                Swal.fire({
                    title:"Error!",
                    text:`${displayMessages.join(",")}`,
                    icon:"error"
                })
            }else{
                const options = {
                    headers: {'X-Custom-Header': 'value'}
                  };
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your are successfully registerd',
                    timer: 1500
                  })
                redirect()
              // props.history.push('/use rs/login')
            }
            })
        }
    }
    export const setUser=(user)=>{
        return{type:'SET_USER',payload:user}
    }
    export const startSetUser=(user)=>{
        return(dispatch)=>{
            axios.get('/users/account',{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                const user=response.data
                dispatch(setUser(user))
            })
        }
    }
   
  


export const startLogin=(formData,redirect)=>{
        return(dispatch)=>{
        axios.post('/users/login',formData)
        .then((response)=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('error')){
                //  alert(response.data.error)
                   const displayMessages=[]
                 /*  for(const key in response.data.error){
                       displayMessages.push(response.data.error[key].message)
                   }*/
                   Swal.fire({
                    title:"Error!" ,
                   text :`${response.data.error}`,           
                   icon:"error",
               })
            }
               
               else{
                   Swal.fire({
                       title:"success",
                       text:"successfully logged",
                       icon:"success",
                       timer:1500
                   })
               
                   localStorage.setItem('authToken',response.data)
                 //  redirect()
                 axios.get('/users/account',{
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                 })
                 .then((response)=>{
                  //   console.log(response.data)
                  const user=response.data
                  dispatch(setUser(user))
                  redirect()
                 })
               }
            })
        }
        }
        
            
             
     
    

export const startUserLogout=()=>{
    return(dispatch)=>{
        axios.delete('/users/logout',{
            headers:{
                "x-auth":localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            if(response.data){
             //  alert(response.data)
             Swal.fire({
                title:"success",
                text:"successfully loggedout",
                icon:"success",
                timer:1500
            })
        
                localStorage.removeItem("authToken")
                dispatch(setUser({}))
                window.location.href="/"
            }
        })
    }
}
