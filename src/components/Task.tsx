import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
    content: string;
    isComplete: boolean;
}

export function Task({ content, isComplete }: TaskProps) {
    return (
        <li className={styles.container}>
            <input type="checkbox" checked={isComplete} />
            <p
                className={
                    isComplete ? styles.taskComplete : styles.taskNotComplete
                }
            >
                {content}
            </p>
            <Trash size={24} />
        </li>
    );
}
