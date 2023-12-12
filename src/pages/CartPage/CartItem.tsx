import React from 'react'
import { IProduct } from 'types/productType'
import { generateСharacteristicString } from 'utils/generateСharacteristicString'
import { Trash } from 'react-bootstrap-icons'

interface CartItemProps {
    item: IProduct
}

const CartItem = ({ item }: CartItemProps): React.JSX.Element => {
    return (
        <div className='shadow bg-white p-2 grid grid-cols-2 max-h-72 rounded'>
            <div className='overflow-hidden'>
                <img className='' src={item.image} alt={item.title} />
            </div>
            <div className='flex flex-col justify-between'>
                <div>
                    <h1 className='text-xl font-semibold'>{item.title}</h1>
                    <p className='text-orange-500 text-sm'>{generateСharacteristicString(
                        item.weight,
                        item.size,
                        item.volume,
                        item.type
                    )}</p>
                </div>
                <div className='w-full text-right'>
                    <button className='p-3 bg-gray-200 hover:bg-gray-300 rounded-sm transition-all'>
                        <Trash />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem