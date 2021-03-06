const express = require('express')
const path= require('path')
const {
    loginUser,
    createUser,
    loginAdmin
    }= require('../controllers/user.js')
const router = express.Router()

router
    .route('/register')
    .post(createUser)

// router.get('/', (req, res, next) =>{
//     res.sendFile(path.join(__dirname, '../','views', 'index.html'))
// })

router
    .route('/login')
    .post(loginUser)


    router
    .route('/loginAdmin')
    .post(loginAdmin)



module.exports = router