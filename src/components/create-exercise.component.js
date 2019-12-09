import React, { Component} from 'react';
import axios from 'axios';

export default class CreateExercise extends Component {
constructor(props){
    super(props);

    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onChangeConfirmepass=this.onChangeConfirmepass.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state ={
        username: '',
        email: '',
        password: '',
        confirmepass: '',
        users: []
    }
}

onChangeUsername(e){
    this.setState({
        username: e.target.value
    });
}

onChangeEmail(e){
    this.setState({
        email: e.target.value
    });
}
onChangePassword(e){
    this.setState({
        password: e.target.value
    });
}
onChangeConfirmepass(e){
    this.setState({
        confirmepass: e.target.value
    });
}

onSubmit(e){
    e.preventDefault()
    
    const exercise ={
        username:this.state.username,
        email:this.state.email,
        password:this.state.password,
        confirmepass:this.state.confirmepass
    }
    console.log(exercise);
    axios.post('http://localhost:4000/exercise/add',exercise)
    .then(res => console.log(res.data));

    window.location ='/';


}

    render(){
        return(
            <div>
               <h3>create new acount</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Username : </label>
                       <input type="text" required className="form-control"
                       value={this.state.username}
                       onChange={this.onChangeUsername}
                       />   
                   </div>
                   <div className="form-group">
                       <label>Email : </label>
                       <input type="text" required className="form-control"
                       value={this.state.email}
                       onChange={this.onChangeEmail}
                       />
                   </div>
                   <div className="form-group">
                       <label>Password: </label>
                       <input type="text" className="form-control"
                       value={this.state.password}
                       onChange={this.onChangePassword}
                       />
                   </div>
                   <div className="form-group">
                       <label>Confirmepass : </label>
                       <input type="text" className="form-control"
                       value={this.state.confirmepass}
                       onChange={this.onChangeConfirmepass}
                       />
                   </div>
                   <div className="form-group">
                       <input type="submit" value="create acount " className="btn btn-primary "/> 
                   </div>
               </form>
            </div>
        );
    }
}