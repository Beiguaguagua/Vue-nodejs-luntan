// 这是管理员的api接口
const express = require('express')

const router = express.Router()

const managerHandler = require('../router_handler/manager_handler.js')

// 发布公告
router.post('/postnotice',managerHandler.postNotice)
// 删除公告
router.post('/delnoticeforid',managerHandler.delNoticeFormId)
// 查看对应id的公告
router.post('/shownoticeforid',managerHandler.showNoticeFromId)
// 罗列全部公告
router.get('/shownotice',managerHandler.showNotice)
module.exports = router