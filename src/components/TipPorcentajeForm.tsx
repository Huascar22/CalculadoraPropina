import {tipOptions} from "../data/tipOptions.ts"
import {Dispatch, SetStateAction} from "react"

type TipPorcentajeFormProps = {
    setTips : Dispatch<SetStateAction<number>>
    tips: number
}

export default function TipPorcentajeForm({setTips, tips}: TipPorcentajeFormProps) {
  return (
    <div>
        <h3 className="mt-3">Propina:</h3>
        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id}>
                    <label className=" me-1" htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={e => setTips(+e.target.value)}
                        checked={tipOption.value === tips}
                    ></input>
                </div>
            ))}
        </form>
    </div>
  )
}
