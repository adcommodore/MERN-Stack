import './App.css';
import React, { useState } from  'react';

function App () {
    const [newTask, setNewTask] = useState("");
    const [addedTasks, setAddedTasks] = useState([]);
    const taskList = { 
        task: newTask, 
        status: false,
    }

    const handleCreateList = (e) => {
        e.preventDefault();

        if (newTask.length === 0) {
            return;
        }

       

        setAddedTasks([ taskList.task, ...addedTasks]);
        setNewTask("");
        
    };

    const handleDeleteTask = (e) => {
        const filteredList = addedTasks.filter((item, index) => {
            return index === e;
        });

        setAddedTasks(filteredList);
    };

    const handleTaskToggle = (e) => {
        const updatedList = addedTasks.map( (item, index) => {
            if (e === index) {
                item.status = ! item.status;
                setAddedTasks(u)
            }

        return item;
        });
    }

  return (
    <div style={{ textAlign: "center"}}>
        <h1>To Do List</h1>
        <form onSubmit={ handleCreateList }>
                <div>
                    <input type="text" onChange= { (e) => setNewTask(e.target.value) } />
                    <input type="submit" value="Add" />
                </div>
        </form>
            {
                addedTasks.map( (item, index) => {
                    return(
                        <div key={ index }>
                           <input onChange= {(e) => {
                               handleTaskToggle(index)
                               }} type = "checkbox"/>
                           <span>{ item }</span>
                           <button onClick={ handleDeleteTask }>
                               Delete
                            </button>
                        </div>
                    );      
                })
            }  
    </div>
  );
}

export default App;
