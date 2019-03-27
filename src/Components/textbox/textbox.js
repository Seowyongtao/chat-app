import React from 'react';
import './textbox.css';

const textInput = (props) =>{
    return(
        <form className = 'textbox'> 
                <input type='text' className='input' onChange={props.textInput} value={props.textValue}/>
                <input type='submit' onClick= {props.sendMessage} value= "send" className='button' disabled={props.textValue.length ==0 || props.textValue.length > 500}/>
        </form>
    )
}

export default textInput;