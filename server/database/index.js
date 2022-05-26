const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/bank"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

let userSchema = new mongoose.Schema({
  email: String,
  checking: Number,
  savings: Number
})

let User = mongoose.model('User', userSchema) // pluralizes the string 'User' to users

const createAccount = async(email) => {

  const userAcc = new User({
    email: email,
    checking: 0,
    savings: 0
  })

  await userAcc.save()

  return 'saved into DB'

}

const getUserInfo = async(email) => {
  let getUser = await User.find({email: email});
  return getUser;
}

const updateCheckingBalance = async(email, amount) => {
  let getBalance = await User.find({email: email});
  let update = await User.updateOne({email: email}, {$set: {checking: getBalance[0].checking + amount}});
  let getUpdatedBalance = await User.find({email: email});

  // console.log(getUpdatedBalance)

  return getUpdatedBalance[0]
}

const updateSavingsBalance = async(email, amount) => {
  let getBalance = await User.find({email: email});
  let update = await User.updateOne({email: email}, {$set: {savings: getBalance[0].savings + amount}});
  let getUpdatedBalance = await User.find({email: email});

  // console.log(getUpdatedBalance)

  return getUpdatedBalance[0]
}

const withdrawFromChecking = async(email, amount) => {
  let getBalance = await User.find({email: email});
  let update = await User.updateOne({email: email}, {$set: {checking: getBalance[0].checking - amount}});
  let getUpdatedBalance = await User.find({email: email});

  // console.log(getUpdatedBalance)

  return getUpdatedBalance[0]
}

const withdrawFromSavings = async(email, amount) => {
  let getBalance = await User.find({email: email});
  let update = await User.updateOne({email: email}, {$set: {savings: getBalance[0].savings - amount}});
  let getUpdatedBalance = await User.find({email: email});

  // console.log(getUpdatedBalance)

  return getUpdatedBalance[0]
}

module.exports = {
  createAccount: createAccount,
  getUserInfo: getUserInfo,
  updateCheckingBalance: updateCheckingBalance,
  updateSavingsBalance: updateSavingsBalance,
  withdrawFromChecking: withdrawFromChecking,
  withdrawFromSavings: withdrawFromSavings
}