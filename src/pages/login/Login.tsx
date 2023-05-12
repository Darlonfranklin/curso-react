import { useEffect, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login: React.FC = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const { nomeDoUsuario } = useUsuarioLogado();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const emailLength = useMemo(() => {
        return email.length * 1000;
    }, [email.length])

    const handleEntrar = () => {
        console.log(email);
        console.log(password);
        navigate('/pagina-inicial')
    }

    const reset = () => {
        setEmail("")
        setPassword("")
    }

    return (
        <div>
            <form>
                <p>{nomeDoUsuario}</p>
                <p>Quantidade de caracteres: {emailLength}</p>

                <InputLogin
                    type="text"
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    type="password"
                    label="Senha"
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <ButtonLogin type="button" onClick={handleEntrar}>{nomeDoUsuario} Entrar</ButtonLogin>
                <ButtonLogin type="reset" onClick={reset}>Apagar</ButtonLogin>
            </form>
        </div>
    )
}