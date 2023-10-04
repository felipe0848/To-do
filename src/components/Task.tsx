import { Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { taskType } from "../App";

interface TaskProps {
    task: taskType;
    deleteFn: (id: string) => void;
    checkFn: (id: string) => void;
}

export function Task({ task, deleteFn, checkFn }: TaskProps) {
    const handleDeleteTask = () => {
        deleteFn(task.id);
    };
    const handleChangeCheck = () => {
        checkFn(task.id);
    };
    return (
        <li className={styles.container}>
            <div className={styles.round}>
                <input
                    type="checkbox"
                    checked={task.isComplete}
                    id={task.id}
                    onChange={handleChangeCheck}
                />
                <label htmlFor={task.id}></label>
            </div>
            <p
                className={
                    task.isComplete
                        ? styles.taskComplete
                        : styles.taskNotComplete
                }
            >
                {task.content}
            </p>
            <button onClick={handleDeleteTask} title="Deletar tarefa">
                <Trash size={20} />
            </button>
        </li>
    );
}
