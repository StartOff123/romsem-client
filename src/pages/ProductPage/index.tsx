import React from 'react'
import { RootState } from 'app-redux/store'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { useParams, Params } from 'react-router-dom'
import { LOAD_CURRENT_PRODUCT } from 'app-redux/slices/productSlice'
import { products } from 'static/propucrts'
import { Button } from 'components'
import { PatchMinusFill, PatchPlusFill } from 'react-bootstrap-icons'
import Recommendations from './Recommendations'
import { generateСharacteristicString } from 'utils/generateСharacteristicString'

const ProductPage = (): React.JSX.Element => {
    document.querySelector('.wrapper')?.scrollTo(0, 0)

    const { productId }: Params = useParams()
    const dispatch = useAppDispatch()
    const { currentProduct } = useAppSelector((state: RootState) => state.productSlice)

    const [count, setCount] = React.useState<number>(1)

    React.useEffect(() => {
        if (!currentProduct || currentProduct.id !== Number(productId)) {
            const product = products.filter(item => item.id === Number(productId))

            dispatch(LOAD_CURRENT_PRODUCT(product[0]))
        }
    })

    const increment = () => {
        if (count > 9) return
        setCount(state => state + 1)
    }

    const decrement = () => {
        if (count < 2) return
        setCount(state => state - 1)
    }

    return (
        <div className='product-page py-7'>
            <div className='wrapper__container'>
                <div className='grid grid-cols-2 h-96 bg-white shadow'>
                    <div className='h-full flex items-center justify-center overflow-hidden'>
                        <img className='w-full' src={currentProduct?.image} alt={currentProduct?.title} />
                    </div>
                    <div className='flex flex-col justify-between px-10 py-5'>
                        <div>
                            <h1 className='text-3xl font-semibold'>{currentProduct?.title}</h1>
                            <p className='text-orange-500 mt-2 text-lg font-light'>{
                                generateСharacteristicString(
                                    currentProduct?.weight,
                                    currentProduct?.size,
                                    currentProduct?.volume,
                                    currentProduct?.type
                                )
                            }</p>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <p className='text-2xl font-bold mr-7'>{currentProduct?.price} ₽</p>
                                <div className='flex rounded items-center'>
                                    <div className='cursor-pointer select-none' onClick={decrement}>
                                        <PatchMinusFill size={25} className='fill-gray-300 hover:fill-orange-500 transition-all' />
                                    </div>
                                    <p className='text-xl px-3 font-bold select-none'>{count}</p>
                                    <div className='cursor-pointer select-none' onClick={increment}>
                                        <PatchPlusFill size={25} className='fill-gray-300 hover:fill-orange-500 transition-all' />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <h1 className='text-lg font-semibold'>Состав</h1>
                                <p className='text-base text-gray-500' style={{ lineHeight: 'normal' }}>
                                    {currentProduct?.compound.map((item, i) => {
                                        if (currentProduct.compound.length === i + 1) {
                                            return item
                                        } else {
                                            return item + ', '
                                        }
                                    })}
                                </p>
                            </div>
                            <div className='mt-7'>
                                <Button>В корзину</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Recommendations type={currentProduct?.type} productId={currentProduct?.id} />
            </div>
        </div>
    )
}

export default ProductPage