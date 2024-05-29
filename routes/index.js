const express = require('express')
const registerUser = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
const checkPassword = require('../controller/checkPassword')
const userDetails = require('../controller/userDetails')
const logout = require('../controller/logout')
const updateuserDetails = require('../controller/updateUserDetails')
const searchUser = require('../controller/searchUser')

const router = express.Router()



router.post('/register',registerUser)
router.post('/email',checkEmail)
router.post('/password',checkPassword)
router.get('/user-detail',userDetails)
router.get('/logout',logout)
router.post('/update-user',updateuserDetails)
router.post('/search-user',searchUser)
module.exports = router