import React from 'react'
import { CaretDown } from 'react-bootstrap-icons'
import classNames from 'classnames'

const sortItems: Array<{ text: string }> = [
    { text: 'По умолчанию' },
    { text: 'Название' },
    { text: 'Сначала дешевые' },
    { text: 'Сначала дорогие' },
]

const Sort = (): React.JSX.Element => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [currentSort, setCurrentSort] = React.useState<string>('По умолчанию')

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClickSort = (text: string) => {
        setIsOpen(false)
        setCurrentSort(text)
    }

    return (
        <div className='sort relative z-10 cursor-pointer'>
            <div className={classNames(
                'sort__item bg-white z-40 shadow px-3 py-1 transition-all',
                isOpen ? 'sort__item_open' : null
            )}
                onClick={handleClick}
            >
                <h1 className='text-sm font-light text-gray-500'>Сортировка</h1>
                <div className='flex items-center justify-between'>
                    <p className='text-lg pr-4'>{currentSort}</p>
                    <CaretDown
                        className={classNames(
                            'text-orange-500 transition-all',
                            isOpen ? null : 'rotate-180'
                        )}
                        size={20}
                    />
                </div>
            </div>
            <div
                className={classNames(
                    'sort__list absolute shadow bg-white w-full left-0 px-3 py-1 border-t border-gray-500 overflow-hidden transition-all',
                    isOpen ? 'sort__list_open' : null
                )}
            >
                {sortItems.map((item, i) =>
                    <div onClick={() => handleClickSort(item.text)} key={i} className='cursor-pointer hover:text-orange-500'>
                        <p className='text-lg'>{item.text}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sort