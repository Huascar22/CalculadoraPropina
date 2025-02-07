import { useState } from "react"
import { ImenuItem, IorderItem } from "../types"

export default function useOrder(){
    const [order, setOrder] = useState<IorderItem[]>([]);
    const [tips, setTips] = useState(0);

    const addItem =(item: ImenuItem)=>{
        const index = order.find(o => o.id == item.id)
        if (index){
            const newOrder = order.map(orderItem => orderItem.id == item.id? 
                {...orderItem, quantity: orderItem.quantity +1}:
                orderItem
            );setOrder(newOrder)
        }else{
            const newItem: IorderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        } 
    }

    const removeItem = (id: number) =>{
        setOrder(order.filter(item => item.id != id))
    }
    
    const placeOrder = () =>{
        setOrder([]);
        setTips(0);
    }

    return{
        order,
        addItem,
        removeItem,
        tips,
        setTips, 
        placeOrder
    }
}