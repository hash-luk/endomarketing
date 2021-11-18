import { Card } from '../Cards'
import {MenuItem,FormControl,Select,Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import * as C from "./styles"

export const DisplayScreen = () => {
    return(
    <C.Container>
        <div className="head">
            <C.Title>Endomarketing</C.Title>
            <FormControl id="form">
                <Select  displayEmpty labelId="type" id="select" inputProps={{'aria-label':'Withou label'}}>
                    <MenuItem>TIPO</MenuItem>
                </Select>
                <Button variant="contained" id="create">Criar <AddIcon id="add"/> </Button>
            </FormControl>
        </div>

        <div className="cardsDisplay">
            <Card />
        </div>
    </C.Container>
 );
}