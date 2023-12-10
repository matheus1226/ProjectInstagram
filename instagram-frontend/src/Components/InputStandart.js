import React from 'react'

export default function InputStandart({ title, type, state, setState }) {
  return (
    <div className='input-field'>
       <label htmlFor={title}>{title}</label>
       <input 
          id={title} 
          type={type} 
          placeholder={`Preencha o campo ${title.toLowerCase()}`}
          value={state}
          onChange={setState}
          />
    </div>
  )
}
