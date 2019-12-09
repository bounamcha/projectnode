import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.email}</td>
        <td>{props.exercise.password}</td>
        <td>{props.exercise.confirmepass}</td>
        <td>
     <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href='#' onClick={()=> {props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
)

export default class ExerciseList extends Component {
    constructor(props){
        super(props);
    
        this.deleteExercise=this.deleteExercise.bind(this);

        this.state = { exercise : [] };
    }
    componentDidMount(){
        axios.get('http://localhost:4000/exercise')
        .then(response => {
            this.setState({exercice: response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    deleteExercise(id) {
        axios.get('http://localhost:4000/exercise'+id)
        .then(res => console.log(res.data));

        this.setState({
            exercise : this.state.exercise.filter(el => el._id !== id)
            
        })
    }

    exerciseList(){
        return this.state.exercise.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
    }
    render(){
        return(
       <div>
           <h3>dashborad</h3>
           <table className="table">
               <thead className="thead-ligth">
                   <tr>
                       <th>Username</th>
                       <th>Email</th>
                       <th>Password</th>
                       <th>Confirmepass</th>
                       <th>Action</th>
                   </tr>
               </thead>
               <tbody>
                   {this.exerciseList()}
               </tbody>
           </table>
       </div>
        );
    }
}