require("dotenv").config()
const app = require('./src/app')
const DbConnect = require('./src/db/db')


DbConnect()
app.listen(3000,()=>{
    console.log("server running on port 3000")
})