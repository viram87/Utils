import React , {useState} from 'react'

export default function TextForm(props) {



    const handleUPclick = ()=>{
        let newtext = Text.toUpperCase();
        setText(newtext);
        
    }

    const handleLWclick = ()=>{
        let newtext = Text.toLowerCase();
        setText(newtext);
        
    }

    const handleonchange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }


    const clear = ()=>{
        setText("");
    }

    


    const [Text, setText] = useState("");
        
    return (
        
        <div className='container mt-2' style={{color: props.mode === 'dark'?'white':'black' , fontFamily: 'Noto-sans'}}>
            <>
        
            <div className="w-50">  

            <h1>{props.heading}</h1>    

            <textarea className="form-control" id="myBox"  onChange={handleonchange} style={{backgroundColor: props.mode === 'dark'?'#0C0404':'white' , color: props.mode === 'dark'?'white':'black' , fontSize: '20px'}}  rows="3" value={Text} placeholder='Insert text here'></textarea>

            <button className="btn btn-primary mt-2" onClick={handleUPclick}>Convert to uppercase</button>

            <button className="btn btn-primary mt-2 ms-2" onClick={handleLWclick}>Convert to lowercase</button>

            <button className="btn btn-primary mt-2 ms-2 px-4" onClick={clear}>clear</button>
            </div>        

            <div>
            <h2 className="mt-3">Text summary</h2>
            <p>{Text.split(" ").length} words and {Text.length} characters</p>
            </div>

            <footer >
                <p  className='fw-bolder' style={{marginTop: '27%' , textAlign: 'center'}}>Copyright &copy; Made by VIRAM CHOKSI</p>
            </footer>
                
            </>
        </div>
    )
}
