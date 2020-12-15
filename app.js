require('dotenv')
const express = require('express')
const dbConnect = require('./models/dbConnect')
const router = require('./routers/router')
require('./models/dbConnect')


const app = express()
console.log('*********',process.env.PORT)
const port = process.env.PORT || 3000



app.listen(port,()=>{
    console.log(`I 'am listening on port http://localhost:${port}`)
    
})

// connect Db
dbConnect()



app.use(express.json())
app.use('/api', router)