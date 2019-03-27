import React, { Component } from 'react';
import './App.css';
import TextInput from './Components/textbox/textbox';
import DisplayBox from '../src/Components/DisplayBox/DisplayBox';
import Socket from './utils/sockit';
import UserDisplayBox from './Components/UsersDisplayBox/UserDisplayBox'

class App extends Component {
  state={
    textInput:'' ,
    userName:'',
    conversations: [
      // {username: 'Edwind', message: 'What did the ocean say to another ocean?', timestamp: 1544532325758},
      // {username: 'Liren', message: 'sea you later?', timestamp: 1544532341078},
      // {username: 'Edwind', message: 'Nothing. It just waved', timestamp: 1544532347412},
      // {username: 'Josh', message: "I'm leaving this chatroom", timestamp: 1544532402998},
    ],
    userLists:[]

  }

  componentDidMount() {

    Socket.emit('NEW_USER')

    Socket.on('GET_CURRENT_USER', user => {
      // think about what to do here
      this.setState({userName: user.username})
      console.log(this.state.userName)
      // this.setState({conversations:[{username: this.state.userName, message: this.state.textInput, timestamp: Date.now()}] })
    })
  
    Socket.on('UPDATE_USER_LIST', users => {
      this.setState({userLists: users})
      console.log(this.state.userLists)
    })

   
    Socket.on('RECEIVE_BROADCAST', message =>{
    const newArray = [...this.state.conversations];
 
    newArray.push(message);
    
    this.setState({conversations:newArray});
    
  } )

}

sendMessage = (event) =>{

  event.preventDefault();   

 
//  const newArray = [...this.state.conversations];
 
//  newArray.push({username: this.state.userName, message: this.state.textInput , timestamp: Date.now()});
 
//  this.setState({conversations:newArray});

 const data = {
  username: this.state.userName,
  message: this.state.textInput,
  timestamp: Date.now()
}


Socket.emit('BROADCAST_MESSAGE', data)


 this.setState({textInput:''});

}

textInput =(event) =>{
  this.setState({textInput: event.target.value});
  
}

  render() {
    return (
      <div className="App">
        <UserDisplayBox userLists = {this.state.userLists}/>

        <DisplayBox
         conversations={this.state.conversations}/>

        
        <TextInput 
          sendMessage= {this.sendMessage}
          textInput= {this.textInput} 
          textValue={this.state.textInput}
          />


      </div>
    );
  }
  }

export default App;
