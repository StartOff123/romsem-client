import React from 'react'
import { Footer, Header, Menu } from 'components'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { RootState } from 'app-redux/store'
import classNames from 'classnames'
import { TOGGLE_MENU } from 'app-redux/slices/settingsSlice'

import './main-layout.scss'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.JSX.Element => {
    const dispatch = useAppDispatch()
    const { isOpenMenu } = useAppSelector((state: RootState) => state.settingsSlice)

    const closeAllModal = () => {
        dispatch(TOGGLE_MENU(false))
    }

    return (
        <>
            <div className='main-layout'>
                <Menu />
                <div className='main-layout__wrapper flex-1 flex flex-col'>
                    <Header />
                    <div className='flex flex-col flex-1'>
                        <div className='flex-1'>
                            {children}
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
            <div
                className={classNames(
                    'bg fixed top-0 left-0 w-full h-full z-50 bg-black',
                    isOpenMenu ? 'bg_visib' : null
                )}
                onClick={closeAllModal}
            ></div >
        </>
    )
}

export default MainLayout