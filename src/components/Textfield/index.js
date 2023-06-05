import './Textfield.css'

const Textfield = ({label,placeholder,required,onChanged,value}) => {

  const onTyping = (evt) =>{
    onChanged(evt.target.value);
  }
  return (
    <div className='text-field'>
      <label>{label}</label>
      <input value={value} onChange={onTyping} placeholder={placeholder} required={required} />
    </div>
  );
};

export default Textfield;
