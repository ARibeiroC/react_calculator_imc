import { useState } from 'react'
import {data} from './data/data.js'
import './App.css'
import { ImcCalc } from './components/ImcCalc'
import { ImcTable } from './components/ImcTable'

function App() {

  const [imc, setImc] = useState(null)
  const [info, setInfo] = useState(null)
  const [infoClass, setInfoClass] = useState(null)

  const calculateImc = (e, height, weight)=>{
        e.preventDefault()

        if (!weight || !height) return
        const weightFloat = +weight.replace(',','.')
        const heightFloat = +height.replace(',','.')
        
        const imcResult = (weightFloat / heightFloat**2)
        setImc(imcResult.toFixed(1))

        data.forEach((item)=> {
          if(imcResult >= item.min && imcResult <= item.max){
            setInfo(item.info)
            setInfoClass(item.InfoClass)
          }
        })

        if (!info) return
  }


  const resetCalc = (e)=>{
    e.preventDefault()

    setImc('')
    setInfo('')
    setInfoClass('')
  }

  return (
    <div className="app">
      {!imc ? <ImcCalc calcImc={calculateImc}/> : <ImcTable  data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/> }
    </div>
  )
}

export default App
