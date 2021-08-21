import React from 'react'
import "../Product.css";
import ProductSkeleton from "./ProductSkeleton"
function TotalProductLoading() {
    return (
        <div className="product_row">
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
        </div>
    )
}

export default TotalProductLoading
