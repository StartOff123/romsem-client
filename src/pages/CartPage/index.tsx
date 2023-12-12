import { RootState } from 'app-redux/store'
import { useAppSelector } from 'hooks/reduxHooks'
import React from 'react'
import { Cart2 } from 'react-bootstrap-icons'
import CartItem from './CartItem'

const CartPage = (): React.JSX.Element => {
    const { cart } = useAppSelector((state: RootState) => state.cartSlice)

    return (
        <div className='cart-page py-7'>
            <div className="wrapper__container">
                <div className='flex items-center'>
                    <Cart2 size={30} className='fill-gray-400' />
                    <h1 className='ml-3 text-2xl'>Корзина</h1>
                </div>
                <div>
                    {cart ?
                        <div className='grid grid-cols-2 gap-8 py-4'>
                            <div className='grid grid-flow-row gap-4'>
                                {cart.map(item =>
                                    <CartItem item={item} />
                                )}
                            </div>
                            <div className=''>
                                <div className='bg-white shadow rounded sticky top-28 p-2'>
                                    <h1 className='text-xl font-semibold'>Ваши данные</h1>
                                    <form action="">
                                        <div className='flex'>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl font-semibold'>Корзина пуста</h1>
                            <p className='text-gray-500 mt-3'>Добавьте какой-нибудь товар</p>
                            <img className='w-32 mt-3' src="/assets/empty.png" alt="empty" />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CartPage