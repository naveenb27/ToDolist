import { useState, useEffect } from "react";

function Nav(){

    const [mode, setMode] = useState(true);
    const [modeSpan, setModeSpan] = useState('light_mode');
    const [isClose, setIsClose] = useState(false);
    const [menu, setMenu] = useState('menu');

    useEffect(()=>{
        const backGround = {
            backgroundColor : mode ? "#fff" : "#242424",
            color : mode ? "#242424" : "#fff",
        }
    }, [mode])

    const backGround = {
        backgroundColor : mode ? "#fff" : "#242424",
        color : mode ? "#242424" : "#fff",
    }

    function handleMode(){
        if(mode){
            setMode(false);
            setModeSpan('dark_mode')
        }else{
            setMode(true);
            setModeSpan('light_mode')
        }
    }

    function handleNav(){
        document.querySelector(".displayNav").classList.toggle("active");

        if(isClose){
            setIsClose(false);
            setMenu('menu');
        }else{
            setIsClose(true);
            setMenu('close')
        }
    }

    
    return(
        <div style={backGround} className="nav-container">
            <div className="nav">
                <div>
                    <span className="symbol" onClick={handleNav} ><span class="material-symbols-outlined">{menu}</span></span>
                    <div className="displayNav">
                        <li>Home</li>
                        <li>Github</li>
                        <li >LinkedIn</li>
                        <li>&copy; 2024 Naveen </li>
                    </div>
                </div>
                <div className="logo">
                    TO DO LIST
                </div>
            </div>
            <div className="lists">
                <div className="mode" onClick={handleMode}>
                    <span class="material-symbols-outlined">{modeSpan}</span>
                    
                </div>
            </div>
        </div>
    )

}

export default Nav;