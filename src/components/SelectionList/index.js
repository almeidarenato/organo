import './SelectionList.css'


const SelectionList = ({label,itens}) =>{
    return(
        <div className="selection-list">
            <label htmlFor="">{label}</label>
            <select name="" id="">
                { itens.map((item)=> 
                <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default SelectionList;