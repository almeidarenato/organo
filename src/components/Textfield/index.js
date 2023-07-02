import './Textfield.css'

const Textfield = ({label,placeholder,required,onChanged,value}) => {

  return (
    <div className='text-field'>
      <label>{label}</label>
      <input value={value} onChange={(evt)=> onChanged(evt.target.value)} placeholder={placeholder} required={required} />
    </div>
  );
};

export default Textfield;
