import { Button } from "./Button"
import '../css/ImcTable.css'

export function ImcTable({data, imc, info, infoClass, resetCalc}){

    return (
        <div className="imc_table">
            <p id="imc_number">
                Seu Imc: <span className={infoClass}>{imc}</span>
            </p>
            <p id="imc_info">
                Situação atual: <span className={infoClass}>{info}</span>
            </p>
            <h3>
                Confira as Classificações
            </h3>
            <div id="imc_table">
                <div className="table_header">
                    <h4>IMC</h4>
                    <h4>Classificação</h4>
                    <h4>Obesidade</h4>
                </div>
                {data.map((item)=> (
                    <div className="table_data" key={item.info}>
                        <p>{item.classification}</p>
                        <p>{item.info}</p>
                        <p>{item.obesity}</p>
                    </div>
                ))}
            </div>
            <Button value={"Voltar"} action={resetCalc} name={"back_btn"}/>
        </div>
    )
}