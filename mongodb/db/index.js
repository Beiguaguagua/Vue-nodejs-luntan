//引入mongoose
const mongoose = require('mongoose');
//定义字符串常量
const db_url = "mongodb://localhost:27017"
//1.连接数据库
mongoose.connect(db_url,{useNewUrlParser:true,useUnifiedTopology:true}) 
//2.连接成功
mongoose.connection.on('connected',function(){
    console.log('连接成功：',db_url);
})
//3.连接失败
mongoose.connection.on('error',function(err){
    console.log('连接错误：',err);
})
//4.断开连接
mongoose.connection.on('disconnection',function(){
    console.log('断开连接');
})
module.exports = mongoose;

