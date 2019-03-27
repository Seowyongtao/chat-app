import React from 'react';
import './UserDisplayBox.css';

const UserLists =(props) =>{
    return(
        <div className='usersDisplayBox'>
            
            <h1>User Lists</h1>

                {props.userLists.map(user=>
                    
                    <div key={user.id}>
                            <img src ={`https://api.adorable.io/avatars/100/${user.username}.png`}/>
                            <p className='username'>{user.username}</p>
                    </div>

                )}
        </div>
    )
}

export default UserLists