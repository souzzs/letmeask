import React from 'react'
import * as C from "./styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {

  return (
    <C.Input {...props}/>
  )
}

export default Input