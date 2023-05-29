import './Form.css'
import Textfield from '../Textfield';

const Form = (props,children) => {
  return (
    <section className='form'>
        <form>
            <h2>Preencha os dados abaixo para incluir um novo colaborador:</h2>
            <Textfield label="Nome" placeholder="Digite seu Nome"/>
            <Textfield label="Cargo" placeholder="Digite seu cargo"/>
            <Textfield label="Imagem" placeholder="Informe a URL da imagem"/>
        </form>
    </section>
  );
};

export default Form;
