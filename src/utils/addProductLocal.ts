import React from 'react'

export const addProductLocal = (productId: number, count: number) => {
    if (window.localStorage.getItem('cart')) {
        const products: Array<{ productId: number, count: number }> = JSON.parse(window.localStorage.getItem('cart') as string)

        products.push({ productId, count })

        window.localStorage.removeItem('cart')
        window.localStorage.setItem('cart', JSON.stringify(products))
    } else {
        window.localStorage.setItem('cart', JSON.stringify(new Array({ productId, count })))
    }
}