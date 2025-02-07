export type ImenuItem = {
    id: number, 
    name: string,
    price: number
}

export type IorderItem = ImenuItem & {
    quantity: number
}