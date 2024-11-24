export const formateoMoneda = (valor)=>{
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(valor)
}

export const obtenerDiferencia = (actual, anterior) => {
    
    const res =   (((actual - anterior) / anterior) * 100).toFixed(2)
    return isNaN(res) ? (0).toFixed(2) : res
}