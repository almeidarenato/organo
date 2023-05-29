import './Textfield.css'

const Textfield = ({ label,placeholder }) => {
  return (
    <div className='text-field'>
      <label>{label}</label>
      <input placeholder={placeholder}/>
    </div>
  );
};

export default Textfield;
