import { ProductType } from "types/productType"

const weightStr: string[] = ['грамм', 'грамма', 'грамм']
const volumeStr: string[] = ['кусочек', 'кусочка', 'кусочков']

export const generateСharacteristicString = (weight?: number, size?: number, volume?: number, type?: ProductType): string => {
    let resultStr: string = ''

    if (type === ProductType.BEVERAGES) {
        resultStr += `${weight} ml`
    } else {
        if (weight) {
            resultStr += generateCurrentStr(weight, weightStr)
        }
    }
    if (size) {
        resultStr += `, ${size} см`
    }
    if (volume) {
        resultStr += `, ${generateCurrentStr(volume, volumeStr)}`
    }

    return resultStr
}

const generateCurrentStr = (num: number, wordsArr: string[]): string => {
    let rootNum = Math.abs(num)

    rootNum %= 100
    if (rootNum >= 5 && rootNum <= 20) return `${num} ${wordsArr[2]}`

    rootNum %= 10
    if (rootNum === 1) return `${num} ${wordsArr[0]}`

    if (rootNum >= 2 && rootNum <= 4) return `${num} ${wordsArr[1]}`

    return `${num} ${wordsArr[2]}`
}