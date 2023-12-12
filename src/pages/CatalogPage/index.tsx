import React from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { useParams, Params, useLocation, Location } from 'react-router-dom'
import { LOAD_CURRENT_CATALOG } from 'app-redux/slices/productSlice'
import { products } from 'static/propucrts'
import { ProductType } from 'types/productType'
import { RootState } from 'app-redux/store'
import { IMenuList, menuList } from 'static/menuList'
import { AboutBlock, Card } from 'components'
import Sort from './Sort'

import './catalog-page.scss'

const CatalogPage = (): React.JSX.Element => {
  document.querySelector('.wrapper')?.scrollTo(0, 0)

  const { type }: Params = useParams()
  const { state }: Location = useLocation()
  const dispatch = useAppDispatch()
  const { currentCatalog } = useAppSelector((state: RootState) => state.productSlice)

  const [currentTitle, setCurrentTitle] = React.useState<IMenuList[] | null>(null)

  React.useEffect(() => {
    dispatch(LOAD_CURRENT_CATALOG(
      products.filter(item => item.type === type?.toUpperCase() as ProductType)
    ))
    setCurrentTitle(
      menuList.filter(link => link.id === state.linkId)
    )
  }, [type])

  return (
    <div className='catalog-page py-7'>
      <div className='wrapper__container'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            {currentTitle && currentTitle[0].icon}
            <h1 className='text-2xl ml-3'>
              {currentTitle && currentTitle[0].title}
            </h1>
          </div>
          {currentCatalog && <Sort />}
        </div>
        {currentCatalog ?
          <div className='catalog-page__items py-7 grid'>
            {currentCatalog.map(item =>
              <Card key={item.id} item={item} className='m-0' />
            )}
          </div> :
          <div className='w-full flex flex-col items-center py-5'>
            <h1 className='text-2xl'>Здесть пока ничего нет</h1>
            <img className='w-32' src="/assets/empty.png" alt="empty" />
          </div>
        }
        <AboutBlock />
      </div>
    </div>
  )
}

export default CatalogPage