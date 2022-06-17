import React from 'react'
import * as C from "./styles";

type PropsInput = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: PropsInput) => <C.Input {...props}/>;

export default Input