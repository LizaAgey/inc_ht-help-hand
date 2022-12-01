import React, {useState} from 'react';
import './App.css';
import Button from './components/SuperButton';
import MultyToDoList from './components/MultyToDoList';

export type TaskType= {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const tasks: Array<TaskType> = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]

    return (
        <>
            <MultyToDoList tasks={tasks}>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
            </MultyToDoList>

            <MultyToDoList tasks={tasks}>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <Button callback={() => {}} color={'red'}>Red Button</Button>
                <Button callback={() => {}}>Default Button</Button>
                <Button callback={() => {}} color={"secondary"} disabled>Secondary disabled Button</Button>
            </MultyToDoList>

            <MultyToDoList tasks={tasks}>Nothing</MultyToDoList>


        </>
)
    ;
}


export default App;
