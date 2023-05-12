import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({ children }) => {
    const [name, setName] = useState<string>('');

    useEffect(() => {
        setTimeout(() => {
            setName('Darlon')
        }, 3000)
    })

    const handleLogout = useCallback(() => {
        console.log('Logout executou')
    }, [])

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: name, logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}