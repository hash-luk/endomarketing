import * as C from "./styles";
import Ad01 from "../../assets/Ads/Ad01.png"
import Ad02 from "../../assets/Ads/Ad02.png"
import Ad03 from "../../assets/Ads/Ad03.png"
import Ad04 from "../../assets/Ads/Ad04.png"
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CSSProperties } from "styled-components";

export const Demonstrative = () => {

  const publicIconStyles: CSSProperties = {
    width: "16px",
    height: "16px"
  };

  const moreIconStyles: CSSProperties = {
    color: "#707070",
    width: "16px",
    height: "16px"
  };
  return (
    <C.Container>
      <div id="header">
        <p>Demonstrativo comercial</p>
        <div id="icons">
          <PublicIcon style={publicIconStyles}/>
            <div id="circle">
                <MoreHorizIcon style={moreIconStyles} />
            </div>
        </div>
      </div>
      <div id="images">
          <img src={Ad01} alt="Anúncio"/>
          <img src={Ad02} alt="Anúncio" />
          <img src={Ad03} alt="Anúncio"/>
          <img src={Ad04} alt="Anúncio" />
      </div>
    </C.Container>
  );
};
