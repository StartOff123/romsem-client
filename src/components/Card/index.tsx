import Button from 'components/Button'
import React from 'react'
import { IProduct } from 'types/productType'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks/reduxHooks'
import { LOAD_CURRENT_PRODUCT } from 'app-redux/slices/productSlice'
import { generateСharacteristicString } from 'utils/generateСharacteristicString'
import { addProductLocal } from 'utils/addProductLocal'
import { ADD_PRODUCT } from 'app-redux/slices/cartSlice'

import './card.scss'

interface CardProps {
    item: IProduct
    className?: string
}

const Card = ({ item, className }: CardProps): React.JSX.Element => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleClickProduct = () => {
        dispatch(LOAD_CURRENT_PRODUCT(item))
        navigate(`/product/${item.id}`)
    }

    const addProduct = () => {
        addProductLocal(item.id, 1)
        dispatch(ADD_PRODUCT(item))
    }

    return (
        <div
            className={classNames(
                'card shadow mx-3 transition-all bg-white',
                className,
            )}
        >
            <div className='card__img overflow-hidden h-48 flex justify-center w-full'>
                <div className='w-full h-full transition-all' style={{ background: `url(${item.image}) no-repeat`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
            </div>
            <div className='card__info mt-7 px-3 py-2'>
                <div className='card__top'>
                    <h1 className='text-2xl font-semibold cursor-pointer transition-all hover:text-orange-500' onClick={handleClickProduct}>{item.title}</h1>
                    <p className='text-gray-500 mt-7'>
                        {generateСharacteristicString(item.weight, item.size, item.volume, item.type)}
                    </p>
                </div>
                <div className='flex justify-between mt-5 pt-5 border-t border-gray-500'>
                    <p className='text-2xl font-semibold'>{item.price} ₽</p>
                    <Button onClick={addProduct}>В корзину</Button>
                </div>
            </div>
        </div>
    )
}

export default Card