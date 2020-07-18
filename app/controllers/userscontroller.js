const {authenticateUser}=require('../middleware/authenticate')
const User=require('../model/user')
const _=require('lodash')
const Axios=require('axios')
//localhost:3700/users/register
module.exports.create=(req,res)=>{
 const body=req.body
    const user=new User(body)
    user.save()
    .then((user)=>{
     //   res.send(_.pick(user,['_id','username','email','zip'])) 
     const contactObj={
        zip :user.zip ,
        lastName : user.lastName,
        country : user.country,
        secondaryEmail : user.secondaryEmail,
        city : user.city,
        facebook : user.facebook,
        mobile : user.mobile,
        description : user.description,
        type : user.type,
        title : user.title,
        firstName : user.firstName,
        twitter : user.twitter,
        phone : user.phone,
        street : user.street,
        state : user.state,
        email : user.email
     }
    
     console.log("##################", contactObj);
     Axios.post('https://desk.zoho.in/api/v1/contacts',contactObj
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
         console.log("response.data.id -- " + response.data.id);
         user.contactId = response.data.id;
         console.log("User obj -- " + user);
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


//localhost/3700/users/login
module.exports.login=(req,res)=>{
    const body=req.body
  User.findByCredentials(body.email,body.password)
       .then(function(user){
           return user.generateToken()
       })
          .then(function(token){
              res.setHeader('x-auth',token)
              res.send(token)
          })
       .catch(function(err){
           res.send(err)
       })
}

//localhost:3700/users/account
module.exports.details=function(req,res){
    const{user}=req
    res.send(_.pick(user,['_id','username','email']))
}

  

//localhost/3700/users/logout
module.exports.remove=function(req,res){
    const {user,token}=req
    User.findByIdAndUpdate((user._id),{$pull:{tokens:{token:token}}})
               .then(function(){
           res.send('successfully deleted')
       })
       .catch(function(err){
           res.send(err)
       })
}


