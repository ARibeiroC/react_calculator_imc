import '../css/ImcCalc.css'
import { Button } from './Button'
import { useState } from 'react'

export function ImcCalc({calcImc}){
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const clearForm = (e)=>{
        e.preventDefault()
        setHeight('')
        setWeight('')
        setHeight.focus()
    }

    const validateFields = (value)=>{
        return value.replace(/[^0-9,]/g,'')
    }

    const handleHeightChange = (e)=>{
        const updatedValue = validateFields(e.target.value)
        setHeight(updatedValue)
    }
    const handleWeightChange = (e)=>{
        const updatedValue = validateFields(e.target.value)
        setWeight(updatedValue)
    }

    return (
        <div className="imc_calc">
            <h2>Calculadora de IMC</h2>
            <form id="imc_form">
                <div className="form_inputs">
                    <div className="form_control">
                        <label>
                            <span>Altura:</span>
                            <input 
                                type="text"
                                placeholder='Ex: 1,75'
                                value={height}
                                onChange={(e)=> handleHeightChange(e)}
                                />
                        </label>
                    </div>
                    <div className="form_control">
                        <label>
                            <span>Peso:</span>
                            <input
                                type="text"
                                placeholder='Ex: 95.0'
                                value={weight}
                                onChange={(e)=> handleWeightChange(e)}
                                />
                        </label>
                    </div>
                </div>
                <div className="action_controls">
                    <Button value="Calcular" action={(e)=> calcImc(e, height, weight)} name="calcular"/>
                    <Button value="Limpar" action={clearForm}  name="clear" />                    
                </div>
            </form>
        </div>
    )
}