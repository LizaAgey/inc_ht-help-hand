import React from 'react';
import {TaskType} from '../App';

type ToDoListType = {
    tasks: Array<TaskType>
    children: React.ReactNode
}

const MultyToDoList: React.FC<ToDoListType> = (props) => {
    const {tasks, children, ...otherProps} = props

    return (
        <div>
            <ul>
                {tasks.map(element => <li key={element.id}>
                    <span>{element.title}</span>
                    <input type="checkbox" checked={element.isDone}/>
                </li>)}
            </ul>
            {children}
            <hr/>
        </div>
    );
};

export default MultyToDoList;