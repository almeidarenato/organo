import './CardInput.css'
import InputMask from 'react-input-mask'


const CardInput = ({ label,placeholder,required,onChanged,value }) => {


const onTyping = (evt) =>{
  onChanged(evt.target.value)
  console.log(value)
}
  return (
    <div className='text-field'>
      <label>{label}</label>
      <InputMask 
      mask='9999 9999 9999 9999'
      value={value} 
      onChange={onTyping}
      placeholder={placeholder}/>
    </div>
  );
};

export default CardInput;
