const express = require('express')

const router = express.Router()

const expressJoi = require('@escook/express-joi')

const userHandler = require('../router_handler/user_handler.js')

const {reg_login_schema} = require('../schema/user')

// 登录接口
router.post('/login',userHandler.loginUser)
// 注册接口
router.post('/reg',userHandler.regUser)
// 退出接口
router.post('/quit',userHandler.quitUser)

module.exports = router
