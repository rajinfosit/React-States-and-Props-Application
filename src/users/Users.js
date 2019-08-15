import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    state={
        users:[
               { name:"Raj",age:20},
               { name:"John",age:30},
               { name:"Jill",age:40},
        ],
        title:"Users List"

    };

    makeMeYounger=()=>{
        
        const newState=this.state.users.map((user)=>{
            const tempUser=user;
            tempUser.age -= 10;
            return tempUser;

        });
this.setState({
    newState
});

        }
    


    render() { 
        return (<div>
            <button onClick={this.makeMeYounger()}>Make Us 10 years</button>
            <h1>{this.state.title}</h1>
                <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
            </div>
         );
    }
}
 
export default Users;