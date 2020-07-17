const express=require('express')
const router=express.Router()
const userscontroller=require("../app/controllers/userscontroller")
const {authenticateUser}=require('../app/middleware/authenticate')
router.post('/users/register',userscontroller.create)
router.post('/users/login',userscontroller.login)
router.get('/users/account',authenticateUser,userscontroller.details)
router.delete('/users/logout',authenticateUser,userscontroller.remove)

module.exports=router