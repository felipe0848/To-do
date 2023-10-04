import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
    content: string;
    isComplete: boolean;
}

export function Task({ content, isComplete }: TaskProps) {
    return (
        <li className={styles.container}>
            <div className={styles.round}>
                <input type="checkbox" checked={isComplete} id="checkbox" />
                <label htmlFor="checkbox"></label>
            </div>
            <p
                className={
                    isComplete ? styles.taskComplete : styles.taskNotComplete
                }
            >
                {content}
            </p>
            <button title="Deletar tarefa">
                <Trash size={20} />
            </button>
        </li>
    );
}
