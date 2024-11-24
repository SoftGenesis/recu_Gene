import { Router } from "express"
import { readFile, writeFile } from 'fs/promises'

const fileDollars = await readFile('./data/tipodolar.json', 'utf-8')
const dollarData = JSON.parse(fileDollars)
const router = Router()

router.get('/', (req, res) =>{
    try{
        const nombres = dollarData.map(dollar => ({ id: dollar.id, nombre: dollar.nombre }));
        res.status(200).json(nombres)
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: 'Error al obtener Info :,('})
    }
})

export default router