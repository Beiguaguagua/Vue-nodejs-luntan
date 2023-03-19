const { json } = require('express')
const db = require('../db/index.js')

// 罗列公告
exports.showNotice = (req,res)=>{
  const sql = 'select * from luntan_notice'
  db.query(sql,(err,results)=>{
    if(err) return res.cc(err)
    return res.send({
      status:0,
      data:results,
      msg:'查询成功'
    })
  })
}
// 发布公告
exports.postNotice = (req,res)=>{
  const info = req.body
  const notice_info = {
    notice_title:info.title,
    notice_content:info.content,
    notice_date:info.date,
    // 0为未删除,1为删除
    is_del:0
  }
  const sql = `insert into luntan_article set ${notice_info}`
  db.query(sql,(err)=>{
    if(err) return res.cc(err)
    return res.send({
      status:0,
      msg:'发布成功'
    })
  })
}
// 删除公告
exports.delNoticeFormId = (req,res)=>{
  const info = req.body
  const sql = `update from luntan_notice set is_del=1 where id=${info.id}`
  db.query(sql,(err)=>{
    if(err) return res.cc(err)
    return res.send({
      status:0,
      msg:'删除成功'
    })
  })
}
// 查看对应id的公告
exports.showNoticeFromId = (req,res)=>{
  const info = req.body
  const sql = `select * from luntan_notice where id=${info.id}`
  db.query(sql,(err,results)=>{
    if(err) return res.cc(err)
    return res.send({
      status:0,
      data:results,
      msg:'查找成功'
    })
  })
}