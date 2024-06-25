import { useState } from "react"

function Card(){
    const [list, setList] = useState([]);
    const [val, setVal] = useState("");

    function addList(){
        if(val.trim() !== ""){
            const newArray = [...list, val];
            setList(newArray)
        }
        setVal("")
    }

    function delet(ind){
        const newArray = list.filter((_, i)=>{i!==ind});

        setList(newArray)
    }

    function check(){

    }

    function handVal(e){
        setVal(e.target.value);
    }
    return (
        <div className="container">
            <div className="form">
                <input placeholder="Enter a list"  onChange={handVal} value={val} type="text" />
                <button className="btn-1" onClick={addList}>+</button>
            </div>

            <div className="show">
                {list.map((val, ind)=>(
                    <div className="list-values">
                        <li key={ind}>{val}</li>
                        <div className="others">
                           <span onClick={() => check(ind)} class="material-symbols-outlined check">check_circle</span>
                           <span onClick={()=>delet(ind)} class="material-symbols-outlined delete">delete</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card;