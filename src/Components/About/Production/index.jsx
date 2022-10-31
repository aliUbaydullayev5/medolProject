import React from 'react'
import {Container, Products} from "./style";
import {products} from "../../../Mock/productsData";
import Button from "../../../Generic/Button";

const Production = () => {
    return(
        <Container>
            <Container.Inset>
                <Container.InsetTitle>ПРОДУКЦИЯ</Container.InsetTitle>
                <Products>
                    {products.map(({id, title, desc, link, img})=> (
                        <Products.Block key={id}>
                            <div>
                                <img src={img} alt={''} />
                            </div>
                            <Products.Title>{title}</Products.Title>
                            <div>
                                <Button>Посмотреть все</Button>
                            </div>
                        </Products.Block>
                    ))}
                </Products>
            </Container.Inset>
        </Container>
    )
}

export default Production