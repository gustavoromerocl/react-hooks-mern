import React, { useState } from 'react'
import { useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: 'strider',
    email: 'test@test.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log({ name, value });
    setformState({
      ...formState,
      //Utliza la propiedad del objeto llmandola por su key, por eso esta entre corchetes(De esta forma el método es aplicable para ambos input)
      [name]: value
    })
  }

  useEffect(() => {
    // console.log('useEffect called')
  }, []);

  useEffect(() => {
    // console.log('formState change')
  }, [formState]);

  useEffect(() => {
    // console.log('email change')
  }, [email]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      <input
        type='eail'
        className='form-control mt-2'
        placeholder='test@test.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />

      { (username === 'strider') &&  <Message />}
      
    </>
  )
}
