import { CarouselResponsiveOption, Carousel } from 'primereact/carousel'
import React from 'react'
import { ArrowRightCircleFill, ArrowLeftCircleFill } from 'react-bootstrap-icons'
import { products } from 'static/propucrts'
import { IProduct, ProductType } from 'types/productType'
import { Card } from 'components'

interface RecommendationsProps {
    type?: ProductType
    productId?: number
}

const Recommendations = ({ type, productId }: RecommendationsProps): React.JSX.Element => {
    const [productsItem] = React.useState<IProduct[]>(
        products.filter(item => ((item.type === type || item.type === ProductType.BEVERAGES) && item.id !== productId))
    )

    const productTemplate = (item: IProduct) => {
        return <Card item={item} className='my-1' />
    }

    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ]

    return (
        <div className='py-7'>
            {
                productsItem.length === 0 ?
                    <div className='flex flex-col items-center'>
                        <h1 className='text-2xl'>Рекомендаций к товару нет</h1>
                        <img className='w-32' src="/assets/empty.png" alt="" />
                    </div> :
                    <>
                        <h1 className='text-2xl font-semibold w-full text-center mb-7'>Рекомендуем к этому товару</h1>
                        <Carousel
                            itemTemplate={productTemplate}
                            value={productsItem}
                            responsiveOptions={responsiveOptions}
                            numScroll={1}
                            numVisible={3}
                            nextIcon={<ArrowRightCircleFill size={25} />}
                            prevIcon={<ArrowLeftCircleFill size={25} />}
                        />
                    </>
            }
        </div>
    )
}

export default Recommendations