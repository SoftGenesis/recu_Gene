import express from "express"
import cors from "cors"

import dolarRouter from './routes/dolar.router.js'
import valorRouter from './routes/valor.router.js'


const app = express()

const port = 3000

app.use(express.json())
app.use(express.static('./client'))

app.listen(port, () =>{
    console.log(`Servidor escuchando en ${port}`)
})

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))

app.use('/dolar/', dolarRouter)
app.use('/valor/', valorRouter)