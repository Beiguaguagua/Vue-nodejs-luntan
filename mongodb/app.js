const mongoose = require('./db/index.js')
const UserSchema = new Schema({
  name:{
      type:String
  },
  age:{
      type:Number
  }
});

const UserModel = mongoose.model('UserModel',UserSchema)

UserModel.find(function(err,data){
  if(err){
      console.log(err)
  }else{
      console.log(data)
  }
})