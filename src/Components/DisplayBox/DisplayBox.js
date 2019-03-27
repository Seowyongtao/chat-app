import React, { Component } from 'react';
import './DisplayBox.css';
import moment from 'moment';
import Sockit from '../../utils/sockit';

class displayBox extends Component{

  
    
    render(){

        
        return(
            <div className='displaybox'>

                <h1>Consversation Box</h1>
                    {this.props.conversations.map(conversation=>

                        <div key={conversation.timestamp}>
                             <img src ={`https://api.adorable.io/avatars/100/${conversation.username}.png`}/>
                            <p className='username'>{conversation.username}</p>
                            <p className='text'>{conversation.message}</p>   
                           {moment(conversation.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
                       </div>

                        )}
            </div>
            )
    }
}


export default displayBox

