import { cotizacion } from "./components/cotizacion.js"
import { formateoMoneda, obtenerDiferencia } from "./utils/moneda.js"



const containerCompra = document.getElementById('containerCompra')
const containerVenta = document.getElementById('containerVenta')
const select = document.getElementById('dolares');

const newCompra = document.getElementById('compra');
const newVenta = document.getElementById('venta'); 
const btnActualizar = document.getElementById('btnCotizar');

const handlerCotizaciones = async()=>{
    const cotizaciones = await getCotizaciones();
    containerCompra.innerHTML = '';
    containerVenta.innerHTML = '';

    cotizaciones.forEach((e)=>{
        const ultimaActualizacion = e.historial[e.historial.length - 1] || {
            compra: e.compra,
            venta: e.venta,
            fecha: new Date().toISOString()
        }

        containerCompra.innerHTML += cotizacion(e.nombre, 
            formateoMoneda(e.compra), 
            obtenerDiferencia(e.compra,ultimaActualizacion.compra), 
            ultimaActualizacion.fecha)

        containerVenta.innerHTML += cotizacion(e.nombre, 
            formateoMoneda(e.venta), 
            obtenerDiferencia(e.venta,ultimaActualizacion.venta), 
            ultimaActualizacion.fecha)
    })
}

const handlerSelect = async()=>{
    const dolares = await getDolares();
    dolares.forEach((e)=>{
        const option = document.createElement('option');
        option.value = e.id;
        option.textContent = e.name;
        select.appendChild(option);
    }) 
}

const handleActualizar = async(id, compra, venta)=>{
    await updateCotizacion(id, compra, venta);
    handlerCotizaciones()
}
document.addEventListener('DOMContentLoaded', ()=>{
    handlerCotizaciones();
    handlerSelect();
})

btnActualizar.addEventListener('click', ()=>{
    const id = select.value
    const compra = parseFloat(newCompra.value)
    const venta = parseFloat(newVenta.value)


    if (isNaN(compra) || isNaN(venta) || compra <= 0 || venta <= 0) {
        alert("Por favor, ingrese valores válidos para compra y venta");
        return
    }
    
    handleActualizar(id, compra, venta)
})
