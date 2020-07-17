const mongoose=require('mongoose')
const dbsetup=()=>{
   mongoose.connect('mongodb://localhost:27017/assignment')
   .then(()=>{
       console.log('connected to db')
   })
   .catch((err)=>{
       console.log(err)
   })
}
module.exports=dbsetup