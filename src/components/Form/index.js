import './Form.css'
import Textfield from '../Textfield';
import SelectionList from '../SelectionList';
import Button from '../Button'


const Form = (props,children) => {
  const teams = [
    'Front-end',
    'Back-end',
    'Arquitetura',
    'Devops',
    'QA',
    'Scrum'
  ]
  const onSave = (evt) => {
    evt.preventDefault();
    console.log("Log de Form")
    console.log(evt)
  }
  return (
    <section className='form'>
        <form onSubmit={onSave}>
            <h2>Preencha os dados abaixo para incluir um novo colaborador:</h2>
            <Textfield label="Nome" placeholder="Digite seu Nome"/>
            <Textfield label="Cargo" placeholder="Digite seu cargo"/>
            <Textfield label="Imagem" placeholder="Informe a URL da imagem"/>
            <SelectionList label="Time" itens={teams} />
            <Button>Criar Card</Button>
        </form>
    </section>
  );
};

export default Form;
