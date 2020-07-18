const User=require('../model/user')
const Ticket=require('../model/ticket')
const _=require('lodash')
const Axios=require('axios')
//localhost:3700/users/register
module.exports.new=(req,res)=>{
 const body=req.body
    const ticket=new Ticket(body)
    ticket.save()
    .then((user)=>{
     //   res.send(_.pick(user,['_id','username','email','zip'])) 
     const ticketObj={
        productId : ticket.productId,
        contactId : user.contactId,
        subject : ticket.subject,
        dueDate: ticket.dueDate,
        departmentId : ticket.departmentId,
        channel : ticket.channel,
        description : ticket.description,
        priority : ticket.priority,
        classification :ticket.classification,
        assigneeId : ticket.assigneeId,
        phone : user.phone,
        category : ticket.category,
        email : user.email,
        status : ticket.status
      
       
     }
    
     console.log("##################", ticketObj);
     Axios.post('https://desk.zoho.in/api/v1/tickets',ticketObj
    ,
    {
        headers: {
         'orgId': '60001280952',
         'Authorization': 'aa8cd2f4d25aa3418e47f953ad9fe323',
         'Content-Type': 'application/x-www-form-urlencoded',
         "Access-Control-Allow-Origin": "*",
   
         }
     }
     ).then((response)=>{
         console.log("Successsssssssssss -- ");
         console.log("response.data.id -- " + response.data);
      res.send(user.contactId);

    })
    .catch((err)=>{
        console.log("ERRORRRRRRRRRRRRR1111111111111" + err);
        console.log("ERRORRRRRRRRRRRRR22222222222" + err.message);
        res.send(err)
    })
 
})
    .catch((err)=>{
        console.log("ERRORRRRRRRRRRRRR#################");
        res.send(err)
    })
}

