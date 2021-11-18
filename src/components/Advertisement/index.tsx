import * as C from "./styles"
import { Demonstrative } from "../Demonstrative";

export const Advertisement = () => {
    return(
        <C.AdContainer>
            <h3>Quadros de Gestão à Vista</h3>
            <Demonstrative />
            <Demonstrative />
            <Demonstrative />
        </C.AdContainer>
    );
}