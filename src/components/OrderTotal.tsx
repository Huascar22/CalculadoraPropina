import { IorderItem } from "../types"

type OrderTotalProps = {
    order: IorderItem[]
    tips: number
    placeOrder: ()=> void
}

export default function OrderTotal({order, tips, placeOrder}: OrderTotalProps) {
  const subTotal =  order.reduce((total, item) =>  total + (item.price * item.quantity), 0)
  const propinas = subTotal * tips
  const total = subTotal + propinas

  return (
    <>
        <h2 className=" mt-3">Totales y Propinas</h2>
        <p>Subtotal a pagar: 
            <span className=" fw-bold"> ${subTotal}</span>
        </p>
        <p>Propinas: 
            <span className=" fw-bold"> ${propinas}</span>
        </p>
        <p>Subtotal a pagar: 
            <span className=" fw-bold"> ${total}</span>
        </p>

        <button className="btn w-100 btn-outline-primary"
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}
