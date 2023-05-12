import { Rotas } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts";

function App() {
  return (
    <UsuarioLogadoProvider>
      <Rotas />
    </UsuarioLogadoProvider>
  );
}

export default App;
