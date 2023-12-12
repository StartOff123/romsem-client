import React from 'react'
import { MainLayout } from 'layouts'
import { CartPage, CatalogPage, HomePage, ProductPage } from 'pages'
import { Route, Routes } from 'react-router-dom'
import { useAppDispatch } from 'hooks/reduxHooks'
import { LOAD_CARD } from 'app-redux/slices/cartSlice'
import { products } from 'static/propucrts'

const App = (): React.JSX.Element => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const cartLocal: Array<{ productId: number, count: number }> = JSON.parse(window.localStorage.getItem('cart') as string)

    if (cartLocal) {
      dispatch(
        LOAD_CARD(cartLocal.map(itemLocal => products.filter(item => item.id === itemLocal.productId)[0]))
      )
    }
  }, [])

  return (
    <div className='wrapper'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='catalog/:type'
            element={<CatalogPage />}
          />
          <Route path='product/:productId' element={<ProductPage />} />
          <Route path='cart' element={<CartPage />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
