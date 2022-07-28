import {React, useState} from "react";
import S from './Indique.module.css'

const Indique = () => {
  const [inputEmail, setInputEmail] = useState('')

  function handleInputEmail(target){
    setInputEmail(target.value)
    console.log(inputEmail)
  }

  function validaEmail(){
    if(inputEmail.indexOf('@') > 2 && inputEmail.indexOf('.com') > inputEmail.indexOf('@')){
      alert("Email Válido")
    }else{
      alert("Email Inválido")
    }
  }

  return (
    <section className={S.share}>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form>
        <div>
          <label>Nome do seu amigo:</label>
          <input type="text" />
        </div>
        <div>
          <label>E-mail:</label>
          <input type="email" value={inputEmail} onChange={({target})=>handleInputEmail(target)}/>
        </div>
      </form>
      <button onClick={(event)=>{
          event.preventDefault()
          validaEmail()}
          }>Enviar agora</button>
    </section>
  );
};
export default Indique