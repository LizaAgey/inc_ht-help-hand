import React, {useState} from 'react';
import './App.css';
import Button from './components/SuperButton';
import MultiToDoList from './components/MultiToDoList';

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
            <MultiToDoList tasks={tasks}>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
            </MultiToDoList>

            <MultiToDoList tasks={tasks}>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <Button callback={() => {}} color={'red'}>Red Button</Button>
                <Button callback={() => {}}>Default Button</Button>
                <Button callback={() => {}} color={"secondary"} disabled>Secondary disabled Button</Button>
            </MultiToDoList>

            <MultiToDoList tasks={tasks}>Nothing</MultiToDoList>


        </>
)
    ;
}


export default App;
