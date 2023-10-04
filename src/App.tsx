import { PlusCircle } from "phosphor-react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { v4 as uuidv4 } from "uuid";
import { NoTask } from "./components/NoTask";
import { ChangeEvent, FormEvent, useState } from "react";

export interface taskType {
    id: string;
    isComplete: boolean;
    content: string;
}
function App() {
    const [tasks, setTasks] = useState<taskType[]>([]);
    const [newTaskText, setNewTaskText] = useState("");

    const handleTypingNewTask = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(event.target.value);
        event.target.setCustomValidity("");
    };
    const handleAddNewTask = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTask: taskType = {
            id: uuidv4(),
            isComplete: false,
            content: newTaskText,
        };
        setTasks([newTask, ...tasks]);
        setNewTaskText("");
    };
    const deleteTask = (id: string) => {
        const updatedTasks = tasks.filter((task) => task.id != id);

        setTasks(updatedTasks);
    };

    const updateCheck = (id: string) => {
        const updatedTasks = tasks.map((atual) =>
            atual.id === id
                ? {
                      id: atual.id,
                      isComplete: !atual.isComplete,
                      content: atual.content,
                  }
                : {
                      id: atual.id,
                      isComplete: atual.isComplete,
                      content: atual.content,
                  }
        );

        setTasks(updatedTasks);
    };
    const handleInvalidText = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.setCustomValidity("Esse campo é obrigatório");
    };

    const countTasksComplete = tasks.reduce(
        (acc, task) => (task.isComplete ? (acc = acc + 1) : acc),
        0
    );
    return (
        <div>
            <Header />
            <main className={styles.wrapper}>
                <form
                    onSubmit={handleAddNewTask}
                    className={styles.FormAddTask}
                >
                    <input
                        onChange={handleTypingNewTask}
                        value={newTaskText}
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        onInvalid={handleInvalidText}
                        required
                    />
                    <button type="submit">
                        Criar <PlusCircle size={16} />
                    </button>
                </form>

                <section className={styles.tasks}>
                    <header className={styles.status}>
                        <strong className={styles.blue}>
                            Tarefas criadas <span>{tasks.length}</span>
                        </strong>
                        <strong className={styles.purple}>
                            Concluidas{" "}
                            <span>
                                {countTasksComplete} de {tasks.length}
                            </span>
                        </strong>
                    </header>
                    {tasks.length > 0 ? (
                        <ul className={styles.taskList}>
                            {tasks.map((task) => (
                                <Task
                                    key={task.id}
                                    task={task}
                                    deleteFn={deleteTask}
                                    checkFn={updateCheck}
                                />
                            ))}
                        </ul>
                    ) : (
                        <NoTask />
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
