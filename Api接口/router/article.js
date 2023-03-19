const express = require('express')

const router = express.Router()

const aricleHandler = require('../router_handler/article_handler.js')

// 展示文章接口
router.get('/showarti',aricleHandler.showArticle)
// 发表文章接口
router.post('/addarti',aricleHandler.addArticle)
// 点赞或者踩
router.post('/yesorno',aricleHandler.YesOrNoToArticle)
// 展示所有标签
router.get('/showtags',aricleHandler.getTags)
// 添加标签次数
router.post('/addnum',aricleHandler.updateNum)
// 通过对应id查找该文章
router.post('/artfromid',aricleHandler.artiFromId)
module.exports = router
