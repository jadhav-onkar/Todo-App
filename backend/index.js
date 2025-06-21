
import express from 'express'
import router from './routes/router.js'
const app = express()
import cors from 'cors'
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use("/api/v1", router)

app.get('/', (req,res)=>{
    res.send("hi from todo api")
})

app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`)
})
