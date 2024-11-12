import "../css/Button.css"

export function Button({value, action, name}){
    const handleAction = (e)=> {
        action(e)
    }
    return (
        <button onClick={handleAction} className={name}>{value}</button>
    )
}