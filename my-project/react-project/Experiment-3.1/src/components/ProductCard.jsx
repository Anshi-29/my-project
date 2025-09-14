import React from 'react'

function ProductCard({product}) {
    return (


        <>

            <div id='product-card'>
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <p>Status: {product.Status}</p>
            </div>
        </>
    )
}

export default ProductCard