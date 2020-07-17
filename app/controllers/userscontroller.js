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
        res.send(_.pick(user,['_id','username','email']))
         .then((response)=>{
              console.log(response.data)
          })
          .catch((err)=>{
              res.send(err)
          })
    })
    .catch((err)=>{
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


