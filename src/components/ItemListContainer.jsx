import React from "react";
import productos from "./data.json";

const ItemListContainer = () => {
    const getProductos = () =>{
        return new Promise((resolve, reject) => {
          if (productos.length===0){
            reject(new Error("No hay productos que mostrar"));
          }
          setTimeout(() => {
            resolve(productos);
          }, 2000);
        });
      }; 
    
    async function fetchingProductos() {
        try {
          const productosFetched = await getProductos();
          console.log(productosFetched);
        } catch (err) {
          console.log(err);
        }
    }
    
    fetchingProductos();

    const cat = productos.map((productos) => {
        return productos.categoria;
    });

    return (
        <>
            <ItemList productos={productos} cat={cat} />
        </>
    );
};

export default ItemListContainer;