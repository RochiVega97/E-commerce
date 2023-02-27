import { container } from "@chakra-ui/react";
const ItemList = ( {productos, cat}) => {
    console.log(productos);
    console.log(cat);

    const catFilter = cat.filter((cat) => {
        return cat ==="Computacion";
    });

    console.log(catFilter);
    return (
        <>
            <Container maxW="container.sm" className="main-catalogue">
                {productos.map((productos) => {
                    <Item
                        key={productos.id}
                        id={productos.id}
                        name={productos.nombre}
                        description={productos.descripcion}
                        stock={productos.stock}
                        category={productos.categoria}
                        price={productos.precio}
                        />
                })}
            </Container>
        </>
    );
};

export default ItemList