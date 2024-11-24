import { formatearFecha } from "../utils/fecha.js"
export const cotizacion = (titulo, valor, ultimo, fecha)=>{
    return `
        <div class="col-span-2 md:col-span-1 p-2 rounded-xl hover:bg-slate-200 space-y-2">
            <p class="text-slate-500 font-semibold text-xl">${titulo}</p>
            <p class="text-2xl md:text-5xl text-green-700 font-bold">${valor}</p>
            <div class="flex justify-between text-xs">

                <p class="font-bold ${ultimo == 0 ? 'text-slate-500' : ultimo < 0 ? 'text-rose-500' : 'text-green-700'}">${ultimo}%</p>
                <p class="font-bold text-slate-500">${formatearFecha(fecha)}</p>
            </div>
        </div>
    `
}