import './SelectionList.css'


const SelectionList = ({label,itens,value,required,onChanged}) =>{
    return(
        <div className="selection-list">
            <label htmlFor="">{label}</label>
            <select name="" id="" value={value} required={required} onChange={evt => onChanged(evt.target.value)}> 
                { itens.map((item)=> 
                <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default SelectionList;