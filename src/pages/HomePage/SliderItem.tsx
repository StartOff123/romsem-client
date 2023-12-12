import React from 'react'
import { IProduct } from 'types/productType'
import { Button } from 'components'
import { generateСharacteristicString } from 'utils/generateСharacteristicString'

interface SliderProps {
  item: IProduct
}

const SliderItem = ({ item }: SliderProps): React.JSX.Element => {
  return (
    <div className='bg-white slider text-end relative'>
      <div className='slider__img absolute w-full h-full pointer-events-none'>
        <img className='absolute h-full' src={item.image} alt={item.title} />
      </div>
      <div className='slider__info p-3 flex flex-col justify-between h-full'>
        <div className='slider__top'>
          <h1 className='text-2xl italic font-semibold'>{item.title}</h1>
          <p className='text-orange-500'>
            {generateСharacteristicString(
              item.weight,
              item.size,
              item.volume,
              item.type
            )}
          </p>
        </div>
        <div className='slider__center'>
          <h1 className='text-3xl font-semibold'>{item.price} ₽</h1>
        </div>
        <div className='slider__bottom'>
          <Button className='text-xl'>
            В корзину
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SliderItem