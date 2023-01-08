import React, { useState} from 'react'

function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case", "Sucess");

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case ", "Success");

    }
    const [text, setText] = useState('');
    const [index ,setIndex]=useState('0')

    const handleOnChange = (event) => {
        
        setText(event.target.value)
        setIndex('1')
    }
    // const [btnText, setBtnText] = useState('Enable Dark mode');

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    
    // const dark = () => {
    //     if (myStyle.color === 'black') {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light mode")
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark mode")
    //     }
    // }
    const handleToclick = () => {
        const newText = text.toUpperCase().split(" ").map(function (word) {
            return word.charAt(0).toLowerCase() + word.slice(1);
        })
            .join(" ");
        
        setText(newText)
        props.showAlert("Converted To tOGGLE Case Case ", "Sucess");

    };
    const handleTiclick = () => {
        var sentence = text.toLowerCase().split(" ");
        for (var i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        setText(sentence.join(" "));
        props.showAlert("Converted To Sentence Case ", "Sucess");

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text coppied ", "Sucess");


    }
    const handleExtraSpace = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "))
      props.showAlert("Extra spaces removed ", "Sucess");


    }
    const handleclear = () => {
        setText("");
        props.showAlert("Text Cleared", "Sucess")
        setIndex('0')

    }
    return (
        // <div style={myStyle} >
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <textarea className="form-control" value={text} style={myStyle} onChange={handleOnChange} id="myBox" rows="8"></textarea> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary ms-3" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary ms-3" onClick={handleclear}>Reset</button>
            {/* <button className="btn btn-primary ms-3" onClick={dark}>{btnText}</button> */}
            <button className="btn btn-primary ms-3" onClick={handleToclick}>tOGGLE CASE</button>
            <button className="btn btn-primary ms-3" onClick={handleTiclick}>Title Case</button>
            <button className="btn btn-primary ms-3" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary ms-3" onClick={handleExtraSpace}>Remove Extra Space</button>

            

            <div className='container my-3'>
                    <h2>Your text summary</h2>
    {index==0 && <p> 0 Word & 0 character </p>}
               { index==1 && <p>{text.split(" ").length} words and {text.length} character</p>} 
                <p>{0.008 * text.split(" ").length} Minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your something to preview it here" }</p>
            </div>
            </div>
        </>
    )
}

export default TextForm
