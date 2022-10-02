import React from "react";
import Todo from '../components/Todo';

const TodoList = ({todolist, removeTodo}) => {

    return (
        <div>
            {
                todolist.map((todo, index) => {
                    return (
                        <Todo value={ todo } key={ index } onClickRemove={() => removeTodo(index)} />
                )
            })
            }
        </div>
    )
}

export default TodoList