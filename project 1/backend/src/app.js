const express = require("express")
const multer = require("multer")
const postRoute = require("./routes/post.routes")
const authRouter = require("./routes/auth.routes")
const app = express()

app.use(express.json())
const upload = multer({storage: multer.memoryStorage()})

app.use('/api', upload.single("image"), postRoute)
app.use('/api', postRoute )


app.use('/api/auth',authRouter)


module.exports = app;