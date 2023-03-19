const db = require('../db/index.js')
const bcyptjs = require('bcryptjs')
const { use } = require('../router/user')
const jwt = require('jsonwebtoken')
const config = require('../config')
const getid = require('../schema/autoID.js')
// 登录
exports.loginUser = (req,res)=>{
  const userinfo = req.body
  console.log(userinfo)
  const sql = 'select * from luntan_user where username=?'
  db.query(sql,userinfo.username,(err,results)=>{
    if(err) return console.log(err)
    if(results.length !== 1) return res.cc('登录失败',1)
    const compareResult = bcyptjs.compareSync(results[0].password,userinfo.password)
    if(compareResult) return res.cc('登录失败--密码不正确,请重新输入',1)
    const user = {...results[0],password:''}
    const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn:config.expiresIn})
    if(results[0].is_Login !== 1){
      const sqlStr = 'update luntan_user set is_Login=1 where username=?'
      db.query(sqlStr,userinfo.username,(err,results_isLogin)=>{
        if(err) return res.cc(err)
      })
      res.send({
        status:0,
        msg:'登录成功',
        data:results,
        token:'Bearer ' + tokenStr
      })
    }else{
      res.send({
        status:1,
        msg:'该用户已经登录,请勿重复登录'
      })
    }
  })
}
// 注册
exports.regUser = (req,res)=>{
  const userinfo = req.body
  const sql = 'select * from luntan_user where username=? or nickname=?'
  db.query(sql,[userinfo.username,userinfo.nickname],(err,results)=>{
    if(err) return res.cc(err)
    if(results.length>0) return res.cc('用户名被占用或者昵称被占用',1)
    if(results.length!=1){
      // 密码加密
      userinfo.password = bcyptjs.hashSync(userinfo.password,10)
      const sqlStr = 'insert into luntan_user set ?'
      const userinfomation = {
        username:userinfo.username,
        password:userinfo.password,
        gender:userinfo.gender,
        nickname:userinfo.nickname,
        fans:0,
        follower:0,
        Level:1,
        experience:0,
        is_creater:0,
        is_Login:0,
        PassId:getid.id
      }
      db.query(sqlStr,userinfomation,(err,results)=>{
          if(err) return console.log(err)
          if(results.affectedRows !== 1) return res.cc('注册用户失败',1)
          return res.send({status:0,msg:'注册成功'})
      })  
    }
  })
}
// 用户退出
exports.quitUser = (req,res)=>{
  const userinfo = req.body.username
  const sql = 'select * from luntan_user where username=?'
  db.query(sql,userinfo,(err,results)=>{
    if(err){
      return res.cc(err)
    }else{
      const sqlStr = 'update luntan_user set ? where ?'
      db.query(sqlStr,[{is_Login:!results[0].is_Login},{username:results[0].username}],(err1)=>{
      if(err1) return res.cc(err1)
      res.send({
        status:0,
        msg:'退出成功'
      })
    })
    }
  })
}
