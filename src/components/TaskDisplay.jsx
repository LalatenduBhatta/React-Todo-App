import React, { useState } from 'react'
import EditModal from './EditModal'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";


function TaskDisplay({ tasks, dispatch, dark }) {
    const [isModal, setISModal] = useState(false)
    const [editTask, setEditTask] = useState({})

    const editHandeler = (task, index) => {
        setISModal(true)
        setEditTask({ task, index })
    }
    const closeModal = () => {
        setISModal(false)
    }
    return (
        <>
            <div className="container">
                {
                    tasks.map((task, index) => {
                        return (
                            <div className="card" key={index}
                                style={{ boxShadow: dark && "0 0 5px white" }}>
                                <h3>{task}</h3>
                                <div className='buttons'>
                                    <button
                                        onClick={() => dispatch({ type: "delete", payload: index })}
                                    >
                                        <RiDeleteBin5Fill />
                                    </button>
                                    <button onClick={() => editHandeler(task, index)}>
                                        <FaEdit />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {isModal && <EditModal closeModal={closeModal} editTask={editTask} dispatch={dispatch} />}
            </div>
        </>
    )
}

export default TaskDisplay