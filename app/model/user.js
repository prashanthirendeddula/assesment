const mongoose=require('mongoose')
const validator=require('validator')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Schema=mongoose.Schema
const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                         return validator.isEmail(value)
            },
                         message:function(){
                             return "invalid email"
                         }
            
        }


    },
    
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:128
    },
    contactId:{
        type:c=String,
        required:false
    },
    lastName:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    secondaryEmail:{
        type:String,
        required:true
    },
    facebook:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        maxlength:10
    },
    description:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        
    },
    twitter:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    ownerId:{
        type:String,
        required:true
    },
    accountId:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    zip:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String
            },
            createdAt:{
                type:Date,
                default:Date.now
            }
        }
    ],
      
})
userSchema.pre('save',function(next){
    const user=this
    if(user.isNew){
      bcryptjs.genSalt(10)
      .then(function(salt){
          bcryptjs.hash(user.password,salt)
             .then(function(encryptedpassword){
                 user.password=encryptedpassword
                 next()
             })
      })
    }else{
        next()
    }
  
})
//own static method
userSchema.statics.findByCredentials=function(email,password){
  const User=this
return   User.findOne({email})
      .then((user)=>{
          if(!user){
              return Promise.reject({error:('invalid email/password')})
          }
        return   bcryptjs.compare(password,user.password)
            .then(function(result){
                if(result){
                    return Promise.resolve(user)
                }else{
                    return Promise.reject({error:('invalid /password')})
                }
            })
      })
      .catch((err)=>{
          return Promise.reject(err)
      })
}
//own static method
userSchema.statics.findByToken=function(token){
  const User=this
  let tokendata
  try{
      tokendata= jwt.verify(token,'jwt@123')

  }catch(err){
       return Promise.reject(err)
  }
  return User.findOne({
      _id:tokendata._id,
      'tokens.token':token
  })
}
//own instance method
userSchema.methods.generateToken=function(){
  const user=this
  const tokendata={
      _id:user._id,
      username:user.username,
      createdAt:Number(new Date())
  }
  const token=jwt.sign(tokendata,'jwt@123')
  user.tokens.push({
      token
  })
  return user.save()
      .then(function(user){
          return Promise.resolve(token)
      })
      .catch(function(err){
          return Promise.reject(err)
      })
}


const User=mongoose.model('User',userSchema)
module.exports=User