import * as C from "./styles";
import { Button } from "@mui/material";

export const Endomarketing = () => {
  return (
    <C.Container>
      <div id="text">
        <h3>Endomarketing</h3>
        <p>
          Endomarketing está relacionado às ações de treinamento ou qualificação
          dos colaboradores da empresa visando um melhor serviço para o cliente.
          Marketing interno, devido ao nome, é usualmente confundido com
          Endomarketing mesmo sendo conceitos diferentes.
        </p>
      </div>
      <Button variant="outlined" size="medium" id="button">
        Dispensar
      </Button>
    </C.Container>
  );
};
