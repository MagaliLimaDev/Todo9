import React, { useState } from "react";
import S from "./Cadastro.module.css"

const Cadastro = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [inputCPF, setInputCPF] = useState('')
  
    function handleInputEmail(target){
      setInputEmail(target.value)
      console.log(inputEmail)
    }
    
    function handleInputCPF(target){
      setInputCPF(target.value)
      console.log(inputCPF)
    }
  
    function validaEmail(){
      if(inputEmail.indexOf('@') > 2 && inputEmail.indexOf('.com') > inputEmail.indexOf('@')){
        alert("Email Válido")
      }else{
        alert("Email Inválido")
      }
    }
  
    function validaCPF(){
      if(cpf.isValid(inputCPF)){
        alert("CPF Válido")
      }else{
        alert("CPF Inválido")
      }
    }
  
    return (
      <section className={S.cadastro}>
        <div className={S.text}>
          <h3>Ta acabando o curso, como você está se sentindo?</h3>
          <p>Eu, Magali me sinto angustiada, nervosa e desempregada. O curso é desafiador e nos faz pensar em desistir todos os dias rsrsrs, mas a experiência que adquirimos ao longo desses seis meses foi maravilhosa e única. Minha vida foi totalmente transformada e agora tenho mais coragem para enfrentar o mercado de trabalho que é tão disputado. Agradeço aos facilitadores, Thom, Inara e Kassi  s2 s2 s2 s2 s2 s2 s2 s2 s2 s2 s2 s2</p>
          <br></br>
          <p> Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
        </div>
  
        <form className={S.formCadastro}>
          <label>Seu nome:</label>
          <input type="text" />
          <label>E-mail:</label>
          <input type="email" value={inputEmail} onChange={({target})=>handleInputEmail(target)}/>
          <label>CPF:</label>
          <input type="text" value={inputCPF} onChange={({target})=>handleInputCPF(target)}/>
          <div className={S.radioInput}>
            <input type="radio" name='genero' value="masculino"/>
            <label htmlFor="Masculino">Masculino</label>
            <input type="radio" name='genero' value="feminino"/>
            <label htmlFor="feminino">Feminino</label>
          </div>
          <button onClick={(event)=>{
            event.preventDefault()
            validaEmail()
            validaCPF()
            }}>Enviar</button>
        </form>
      </section>
    );
  };
  
  export default Cadastro;