import { useState } from "react";
import "./Todo.scss";

const Todo = () => {
    const [listTodo, setListTodo] = useState([]);
    const [dataTodo, setDataTodo] = useState();
    return (
        <>
            <div className="todo-container">
                <h1 className="todo-title">Todo List</h1>
                <div className="todo-content-container">
                    <div className="todo-input-container">
                        <input
                            type="text"
                            id="todo-input"
                            onChange={(event) =>
                                setDataTodo(event.target.value)
                            }
                        />
                        <button
                            className="todo-btn"
                            onClick={() => setListTodo([...listTodo, dataTodo])}
                        >
                            Add
                        </button>
                    </div>
                    <div className="todo-content">
                        <ul className="list-todo">
                            {listTodo.map((item, index) => (
                                <li key={index} className="list-todo-item">
                                    <span>{item}</span>
                                    <span
                                        className="delete-todo"
                                        onClick={() => {
                                            const newListTodo = listTodo.filter(
                                                (todo) => todo !== item
                                            );
                                            setListTodo(newListTodo);
                                        }}
                                    >
                                        delete
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
