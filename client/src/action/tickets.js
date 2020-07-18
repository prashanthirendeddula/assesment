import axios from '../config/axios'
import Swal from "sweetalert2"
import Axios from "axios"
  
    export const setTicket=(ticket)=>{
        return{type:'SET_TICKET',payload:ticket}
    }
  

export const startcreateTicket=(formData,ticketObj,redirect)=>{
        return(dispatch)=>{
        axios.post('/users/create',formData)
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
                       text:"successfully ticket created",
                       icon:"success",
                       timer:1500
                   })
                   const ticket=response.data
                   dispatch(setTicket(ticket))
                  
               
                 //  redirect()
                axios.get('/users/account',{
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                 })
                 .then((response)=>{
                   console.log(response.data)
                  
                 })
               }
            })
        }
        }
        
            
             
     
    

