import * as C from "./styles"
import{data} from "../../data.json";
import { Chip } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CSSProperties } from "styled-components";

export const Card = () => {
    const chipStyles:CSSProperties = {
        borderRadius: 0,
        width: "70px",
        height: "11px",
        fontWeight: "bold",
        fontSize: "6pt",
        textAlign:"center",
        marginRight:"10px",
    }

    const fabStyles:CSSProperties = {
        backgroundColor: "#DBDBDB",
        boxShadow: "none"
    }

    const moreIconStyles:CSSProperties = {
        color: "#707070"
    }

    return(
        <C.CardContainer>
            {data.map((e) => {
                return(
                    <div className="Card">
                        <div id="cardContent">
                        <div id="cardImage">
                            <img src={e.files[0]['file']} alt="" />
                        </div>
                        <div id="content">
                            <p className="title">{e.title}</p>
                            <div id="additionalInformation">
                                <Chip size="small" label={e.type === "event"? "EVENTO" : "PUBLICAÇÂO" } style={chipStyles} className={e.type === "event" ? "event" : "publication"} />
                                <p className="date">| {e.date}</p>
                                {e.type === "event" ? <p id="event">| 3 CONFIRMAÇÕES DE 15</p> : <p></p>}
                            </div>
                            <p>{e.description}</p>
                        </div>
                        </div>
                        <Fab size="small" color="secondary" aria-label="more" style={fabStyles} id="fabicon">
                            <MoreHorizIcon style={moreIconStyles}/>
                        </Fab>
                    </div>
                )
            })}
        </C.CardContainer>
    );
}