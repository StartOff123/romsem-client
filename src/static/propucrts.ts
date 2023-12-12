import { IProduct, ProductType } from 'types/productType'

export const products: IProduct[] = [
    {
        id: 1,
        type: ProductType.ROLS,
        title: 'Хоккайдо',
        weight: 174,
        volume: 8,
        popular: 0,
        price: 309,
        compound: [
            'лосось терияки',
            'сыр сливочный',
            'авокадо',
            'соус сырный',
            'соус унаги'
        ],
        image: 'https://storage.yandexcloud.net/cdn-release/cache/68/f1/68f144e4a83e5b90e0120970f8840ae7.png'
    },
    {
        id: 2,
        type: ProductType.SETS,
        title: 'Сет под шубой',
        weight: 1389,
        volume: 50,
        popular: 0,
        price: 1199,
        compound: [
            'лосось терияки',
            'сыр сливочный',
            'авокадо',
            'соус сырный',
            'соус унаги'
        ],
        image: 'https://storage.yandexcloud.net/cdn-release/cache/f3/5d/f35d1d0cadf121060da61e72140d643a.png'
    },
    {
        id: 3,
        type: ProductType.PIZZA,
        title: 'Четыре сезона',
        weight: 415,
        size: 25,
        popular: 0,
        price: 315,
        compound: [
            'лосось терияки',
            'сыр сливочный',
            'авокадо',
            'соус сырный',
            'соус унаги'
        ],
        image: 'https://storage.yandexcloud.net/cdn-release/cache/42/0e/420e5a83df31abb20c87cb9e280c6b55.png'
    },
    {
        id: 4,
        type: ProductType.SETS,
        title: 'Новогодний корпоратив',
        weight: 2022,
        volume: 82,
        popular: 0,
        price: 1690,
        compound: [
            'лосось терияки',
            'сыр сливочный',
            'авокадо',
            'соус сырный',
            'соус унаги'
        ],
        image: 'https://storage.yandexcloud.net/cdn-release/cache/f0/09/f009a542eee7570f48be651e64a071ca.png'
    },
    {
        id: 5,
        type: ProductType.BEVERAGES,
        title: 'Кока-Кола',
        weight: 1000,
        popular: 0,
        price: 244,
        compound: [
            'Вода',
            'Сахар',
            'Краситель Сахарный колер IV'
        ],
        image: 'https://images.deliveryhero.io/image/darkstores/Thailand/all/88519591490.jpg?height=480'
    }
] 