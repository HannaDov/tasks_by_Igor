import React from 'react';

export type TasksPropsType={
    data:DataPropsType
}
export type DataPropsType = {
    title: string
    tasks: Array<TaskPropsType>
    students: Array<string>
}
export type TaskPropsType = {
    taskId: number
    title: string
    isDone: boolean
}
export const Tasks = (props:TasksPropsType) => {
    return (
        <>
            <div><h3>{props.data.title}</h3></div>

            <div>
                <ul>
                    {props.data.tasks.map((el)=>{
                        return(
                            <li key={el.taskId}><input type='checkbox' checked={el.isDone}/><span>{el.title}</span> </li>
                        )
                    })}
                </ul>
                <ul>
                    {props.data.students.map((el)=>{
                        return (
                            <li>{el}</li>
                        )
                    })}
                </ul>
            </div>

        </>
    )

}