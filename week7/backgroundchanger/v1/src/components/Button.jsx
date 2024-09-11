export default function Button({color,onClick}){

    return <div >
        <button onClick={onclick} className={`bg-${color}-500 `}>{color}</button>
    </div>
}