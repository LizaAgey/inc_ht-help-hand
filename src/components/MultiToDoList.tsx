import React from 'react';
import {TaskType} from '../App';

type ToDoListType = {
    tasks: Array<TaskType>
    children: React.ReactNode
}

const MultiToDoList: React.FC<ToDoListType> = (props) => {
    const {tasks, children, ...otherProps} = props

    const tasksList = tasks.map(element => <li key={element.id}>
        <span>{element.title}</span>
        <input type="checkbox" checked={element.isDone}/>
    </li>)
    return (
        <div>
            <ul>
                {tasksList}
            </ul>
            {children}
            <hr/>
        </div>
    );
};

export default MultiToDoList;