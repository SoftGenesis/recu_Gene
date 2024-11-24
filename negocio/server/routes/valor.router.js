import { Router } from "express"
import { readFile, writeFile } from 'fs/promises'
//import { get_dollar } from '../utils/dolar.js'

const fileValor = await readFile('./data/data.json', 'utf-8')
const valorData = JSON.parse(fileValor)
const router = Router()

router.get('/', (req, res) =>{

    try{
        res.status(200).json(valorData)
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: 'Error al obtener Info :,('})
    }
})

router.put('/actualizarCotizacion/:id', (req, res) =>{ 
    const id = parseInt(req.params)
    const { compra, venta } = req.body;

    try{
        const dolar = valorData.find(d => d.id === id)
        if(!dolar){
            return res.status(404).json({ error: 'Dólar no encontrado.' })
        }
        dolar.historial.push({
            compra: dolar.compra,
            venta: dolar.venta,
            fecha: new Date().toISOString(),
        })
        dolar.compra = compra
        dolar.venta = venta

        writeFile('./data/data.json', JSON.stringify(valorData, null, 2))
        res.status(200).json({ message: 'Cotización actualizada con éxito.', dolar })
    }catch(error){
        res.status(500).json(error)
    }
})

export default router