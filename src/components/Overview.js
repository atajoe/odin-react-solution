import React, { Component } from "react";

// class Overview extends Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         const {tasks} = this.props;

//         const listOfTasks = tasks.map((task,i) => <li key={i}>Task: {task.text}</li>)
//         return (
//             <div>
//                 <ul>
//                     {listOfTasks}
//                 </ul>
//             </div>
//         ) 
//     }

// }

const Overview = (props) => {
    const { tasks } = props;

    return (
        <div>
            <ul>
                {tasks.map((task,i) => {
                    return <li key= {i}>Task number {task.number}: {task.text}</li>
                })}
            </ul>
        </div>
    )
}

export default Overview;