import './Form.css';
import React, { useState } from 'react';
import Textfield from '../Textfield';
import SelectionList from '../SelectionList';
import Button from '../Button';
import CardInput from '../CardInput';


const Form = ({ onRegister,teams }) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [time, setTime] = useState('');
  const [imagem, setImagem] = useState('');
  const [cartao, setCartao] = useState('');

  const onSave = (evt) => {
    evt.preventDefault();
    onRegister({ nome, cargo, time, imagem, cartao });
    setNome('');
    setCargo('');
    setTime('');
    setImagem('');
    setCartao('');

  };

  const handleNomeChange = (valor) => {
    setNome(valor);
  };

  const handleCargoChange = (valor) => {
    setCargo(valor);
  };

  const handleImagemChange = (valor) => {
    setImagem(valor);
  };

  const handleTimeChange = (valor) => {
    setTime(valor);
  };

  const handleCartaoChange = (valor) => {
    setCartao(valor);
  };

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados abaixo para incluir um novo colaborador:</h2>
        <Textfield
          label="Nome"
          placeholder="Digite seu Nome"
          required={true}
          value={nome}
          onChanged={handleNomeChange}
        />
        <Textfield
          label="Cargo"
          placeholder="Digite seu cargo"
          required={true}
          value={cargo}
          onChanged={handleCargoChange}
        />
        <Textfield
          label="Imagem"
          placeholder="Informe a URL da imagem"
          value={imagem}
          onChanged={handleImagemChange}
        />
        <SelectionList
          label="Time"
          itens={teams}
          value={time}
          onChanged={handleTimeChange}
          required={true}
        />
        <CardInput
          label="Cartão"
          placeholder="informe o seu cartao"
          value={cartao}
          onChanged={handleCartaoChange}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
