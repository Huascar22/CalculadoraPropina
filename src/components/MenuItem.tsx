import { ImenuItem } from "../types";
import {menuItems} from "../data/db"

type ImenuItemProps = {
    addItem: (item: ImenuItem)=> void
}

export default function MenuItem({addItem} : ImenuItemProps) {
  return (
    <>
      	<h2>Menú</h2>
        {
          menuItems.map(item => (
            <button className=" w-100 d-flex m-2 btn btn-outline-primary"
              onClick={() => addItem(item)}
              key={item.id}>  
              <p className=" text-dark ">{item.name}</p>             
              <p className=" ms-auto text-dark">{item.price}</p>          
            </button>
          ))
        }    
    </>
  )
}
