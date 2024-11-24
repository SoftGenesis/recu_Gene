import { API } from "./API.js";

export const updateCotizacion = async (id, compra, venta) => {
    try {
      const response = await fetch(`${API}/valor/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ compra, venta }),
      });
  
      if (!response.ok) throw new Error("Error al actualizar la cotización");
      return await response.json();
    } catch (error) {
      console.error(error);
      alert("No se pudo actualizar la cotización");
    }
  }

export const getCotizaciones = async () =>{
    try{
        const res = await fetch(`${API}/valor/`, {
            method: "GET",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if(!res.ok){
            throw new Error("Error: ${res.status}");
        }        
        const data = await res.json()
        return data
    }
    catch(error){
        console.log(error)
        return {error: 'Error al obtener productos'}
    }
}

export const getDolares = async () =>{
    try{
        const res = await fetch(`${API}/dolar/`, {
            method: "GET",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if(!res.ok){
            throw new Error("Error: ${res.status}");
        }        
        const data = await res.json()
        return data
    }
    catch(error){
        console.log(error)
        return {error: 'Error al obtener productos'}
    }
}