import React from 'react'
import iconButton from '../../assets/copy.svg';
import * as C from "./styles";

type CopyCodeProps = {
    code: string;
}

const CopyCode = ({code}: CopyCodeProps) => {
    const copyCode = () => {
        navigator.clipboard.writeText(code);
    }

    return (
        <C.Button onClick={copyCode}>
            <C.ContainerImage>
                <img src={iconButton} alt="Copiar código da sala" />
            </C.ContainerImage>
            <C.TextButton>{code}</C.TextButton>
        </C.Button>
    )
}

export default CopyCode