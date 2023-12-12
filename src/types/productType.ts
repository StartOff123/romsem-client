export interface IProduct {
    id: number //id
    type: ProductType //Тип продукта
    title: string //Назвоние
    weight: number //Вес
    size?: number //Размер
    volume?: number //Количество кусочков
    popular: number //Популярность
    price: number //Цена
    compound: string[] //Состав
    image: string //Ссылка на картинку
}

export enum ProductType {
    PIZZA = 'PIZZA',
    SUSHI = 'SUSHI',
    ROLS = 'ROLS',
    SETS = 'SETS',
    WOK = 'WOK',
    BEVERAGES = 'BEVERAGES'
}