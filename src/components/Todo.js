import React from "react";

const Todo = ({value, onClickRemove}) => {

    return (
        <div>
            {value}
            <button onClick={onClickRemove} > delete </button>
        </div>
    )
}

export default Todo