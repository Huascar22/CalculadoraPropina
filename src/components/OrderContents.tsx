import { IorderItem } from "../types";

type IordenItemProps = {
    order: IorderItem[]
    removeItem: (id: number)=> void
}

export default function OrderContents({order, removeItem}: IordenItemProps) {
  return (
    <>
        
        {          
            order.map(item => (
            <div key={item.id} className=" d-flex justify-content-between mt-2 border-bottom ">
                <div>
                    <p className="m-0">{item.name} --- ${item.price}</p>
                    <p className=" fw-bold m-0">Cantidad: {item.quantity} -- {item.quantity * item.price}</p>
                </div>
               <div>
                    <button className="btn btn-danger  rounded rounded-5"
                        onClick={() => removeItem(item.id)}>
                        X
                    </button>
               </div>       
            </div>    
            ))
        }     
    </>
  )
}
