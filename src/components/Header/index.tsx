import React from "react";
import * as C from "./styles";
import logo from "../../assets/logo.png";

export const Header = () => {
    return(
        <C.HeadBar>
            <div className="logo"><img src={logo} alt="InCircle" /></div>
        </C.HeadBar>
    );
}