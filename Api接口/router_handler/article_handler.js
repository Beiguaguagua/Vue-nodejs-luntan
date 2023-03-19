const { json } = require('express')
const db = require('../db/index.js')
// 展示文章
exports.showArticle = (req,res)=>{
  const sql = 'select * from luntan_article'
  db.query(sql,(err,results)=>{
    if(err) return res.cc(err)
    res.send({
      status:0,
      data:results
    })
  })
}

// 添加文章
exports.addArticle = (req,res)=>{
  const info = req.body
  console.log(info.time)
  const arti_info = {
    arti_title:info.title,
    author:info.author,
    tags:[JSON.stringify(info["tags[]"])],
    Yes:0,
    No:0,
    watchers:0,
    author_level:info.author_level,
    Date:info.time,
    content:info.content
  }
  const sql = 'insert into luntan_article set ?'
  db.query(sql,arti_info,(err)=>{
    if(err)  return res.cc(err)
      return res.send({
        status:0,
        msg:'发布成功'
      })
  })
}

// 点赞
exports.YesOrNoToArticle = (req,res)=>{
  const info = req.body
  // 通过0或者1来判断是点赞还是踩
  // 0为点赞,1为踩
  function YesOrNo(item,id){
    const sql = `select ${item} from luntan_article where id=${id}`
    db.query(sql,info.id,(err,results)=>{
    let obj = JSON.stringify(results[0])
    obj = JSON.parse(obj)
    // obj[Object.keys(obj)[0]]对象中的数据只能通过键值来获取   
    if(err) return res.cc(err)
    if(results.length !== 1) return res.cc('该文章不存在',1)
    const oldItem = obj[Object.keys(obj)[0]]
    const newItem = obj[Object.keys(obj)[0]] += 1
    const sqlStr = `update luntan_article set ${item}=${newItem} where id=${id}`
    db.query(sqlStr,(err)=>{
      if(err) return console.log(err)
      if(oldItem === newItem) return res.cc(`error`,1)
      res.send({
        status:0,
        msg:`Success`,
      })
    })
  })
  }
  if(info.choose == 1){
    YesOrNo('No', info.id)
  }else{
    YesOrNo('Yes', info.id)
  }
}

// 获取标签
exports.getTags = (req,res)=>{
  const sql =  'select * from luntan_tags'
  db.query(sql,(err,results)=>{
    if(err) return res.cc(err)
    res.send({
      status:0,
      data:results,
      msg:'获取标签成功'
    })
  })
}
// 添加标签提及次数
exports.updateNum = (req,res) =>{
    const tag_list = req.body
    for(let key in tag_list){
      const sql = `select use_num from luntan_tags where tags_title='${tag_list[key]}'`
      db.query(sql,(err,results)=>{
        if(err) return console.log(err)
        const newNum = results[0].use_num +1
        const sqlStr = `update luntan_tags set use_num = ${newNum} where tags_title='${tag_list[key]}'`
        db.query(sqlStr,(err)=>{
          if(err) return console.log(err)
          return
        })
      })
    }
    return res.send({
      status:0,
      msg:'发布成功'
    })
}
// 通过对应id查找该文章
exports.artiFromId = (req,res) =>{
  const art_id = req.body
  const sql = `select * from luntan_article where id=${art_id.id}`
  db.query(sql,(err,results)=>{
    if(err) return res.cc(err)
    if(results[0] === null){
      res.send({
        status:0,
        msg:'文章不存在或者已经被删除'
      })
    }else{
      return res.send({
        status:0,
        msg:'查找成功',
        data:results[0]
      })
    }
  })
}