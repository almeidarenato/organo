import './Form.css'
import Textfield from '../Textfield';
import SelectionList from '../SelectionList';
import Button from '../Button'
import CardInput from '../CardInput'
import {useState} from 'react'


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
    console.log("Foi submetido ",nome,cargo,time,imagem,cartao)
  }

  const [nome,setNome] = useState('')
  const [cargo,setCargo] = useState('')
  const [time,setTime] = useState('')
  const [imagem,setImagem] = useState('')
  const [cartao,setCartao] = useState('')

  return (
    <section className='form'>
        <form onSubmit={onSave}>
            <h2>Preencha os dados abaixo para incluir um novo colaborador:</h2>
            <Textfield label="Nome" placeholder="Digite seu Nome" required={true} value={nome} onChanged={valor => setNome(valor)}  />
            <Textfield label="Cargo" placeholder="Digite seu cargo" required={true} value={cargo} onChanged={valor => setCargo(valor)}/>
            <Textfield label="Imagem" placeholder="Informe a URL da imagem" value={imagem} onChanged={valor => setImagem(valor)}/>
            <SelectionList label="Time" itens={teams} value={time} onChanged={valor => setTime(valor)} required={true}/>
            <CardInput label="Cartão" placeholder="informe o seu cartao" value={cartao} onChanged={valor => setCartao(valor)} />
            <Button>Criar Card</Button>
        </form>
    </section>
  );
};

export default Form;
