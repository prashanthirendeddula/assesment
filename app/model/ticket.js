const mongoose=require("mongoose")
const Schema=mongoose.Schema
const ticketSchema=new Schema({
    productId : {
           type:String,
           required:true

    },
    subject : {
        type:String,
        required:true

    }, 
    dueDate :{
        type:String,        
        required:true


    } ,
    channel : {
        type:String,
        required:true


    },
    description : {
        type:String

    },   
     priority : {
        type:String

     },
    classification: {
        type:String

    },
    assigneeId :{
        type:String,
        required:true


    },
    phone : {
        type:String,
        required:true


    },
    category : {
        type:String,
        required:true


    },
    status : {
        type:String,
        required:true


    }
  

})
const Ticket=mongoose.model('ticket',ticketSchema)
module.exports=Ticket