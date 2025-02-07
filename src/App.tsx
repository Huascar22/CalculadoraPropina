import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipPorcentajeForm from "./components/TipPorcentajeForm";
import useOrder from "./hooks/useOrder"

function App() {
  const {addItem, order, removeItem, tips, setTips, placeOrder} = useOrder();

  return (
    <>
      <header className=" bg-primary text-center p-2">
        <h1 className=" text-white">Calculadora de propinas y consumo</h1>
      </header>

      <main>
        <div className=" row py-5 d-flex justify-content-center">
            <div className=" col-4 text-center">
                <MenuItem addItem={addItem}/>          
            </div>

            <div className=" col-4 border border-1 border-primary">
              <h2 className=" text-center">Consumo</h2>
              {
                order.length?(
                  <>
                      <OrderContents 
                      order={order}
                      removeItem = {removeItem}
                      />

                    <TipPorcentajeForm
                      setTips={setTips}
                      tips={tips}
                      
                    />

                    <OrderTotal
                      order={order}
                      tips={tips}
                      placeOrder={placeOrder}
                    />
                  </>
                ):
                <p>No hay ordenes en el listado</p>
              }
                
            </div>
        </div>
      </main>

    </>
  )
}

export default App
