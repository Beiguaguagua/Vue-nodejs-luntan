const express = require('express')

const app = express()

const cors = require('cors')

app.use(express.urlencoded({ extended: false}))

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
  });

// 简化res.send的操作

app.use((req,res,next)=>{
  res.cc = function(err,status=1){
    res.send({
      status,
      msg:err instanceof Error ? err.msg : err
    })
  }
  next()
})

const expressJWT = require('express-jwt')
const config = require('./config')

app.use(expressJWT({secret:config.jwtSecretKey}).unless({path:[/^\/api/]}))
app.use(cors())
// 用户模块
const userRouter = require('./router/user.js')
app.use('/api/user',userRouter)
// 论坛文章模块
const articleRouter = require('./router/article.js')
app.use('/api/article',articleRouter)
// 公告模块
const noticeRouter = require('./router/manager.js')
app.use('/api/manager',noticeRouter)
app.listen(80,()=>{
  console.log('server running at http://127.0.0.1');
})
