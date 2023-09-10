const mongoose = require('mongoose')

const connect = async () => {
  await mongoose.connect('mongodb://0.0.0.0:27017/Ecom_Dev', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connect
