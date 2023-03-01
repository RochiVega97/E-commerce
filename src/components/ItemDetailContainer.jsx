import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const initialProduct = [
  {
    id: 1,
    categoria: "deporte",
    nombre: "Zapatilla Adidas pro",
    precio: 5200,
    stock: 5,
  },
  {
    id: 2,
    categoria: "deporte",
    nombre: "Zapatilla Nike Static",
    precio: 9333,
    stock: 5,
  },
  {
    id: 3,
    categoria: "deporte",
    nombre: "Zapatilla Nike XWM",
    precio: 4587,
    stock: 5,
  },
  {
    id: 4,
    categoria: "urbana",
    nombre: "Zapatilla Nike pro Ultra",
    precio: 6792,
    stock: 5,
  },
  {
    id: 5,
    categoria: "urbana",
    nombre: "Zapatilla Nike Dport",
    precio: 7980,
    stock: 5,
  },
  {
    id: 6,
    categoria: "urbana",
    nombre: "Zapatilla Nike pro",
    precio: 7390,
    stock: 5,
  },
  {
    id: 7,
    categoria: "vestir",
    nombre: "Zapatilla Nike Sport",
    precio: 8920,
    stock: 5,
  },
  {
    id: 8,
    categoria: "vestir",
    nombre: "Zapatilla Nike Sport max",
    precio: 3800,
    stock: 5,
  },
  {
    id: 9,
    categoria: "vestir",
    nombre: "Zapatilla Nike pro Future",
    precio: 5900,
    stock: 5,
  },
];

const promesa = new Promise((res, rej) => {
  res(initialProduct);
  rej("Ha ocurrido un error");
});

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      promesa.then((data) => {
        setProducto(data.find((el) => el.id === parseInt(id)));
      });
    }, 2000);
    setLoading(false);
  }, [id]);

  return (
    <div>
      {loading ? loading : <Loading />}
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;