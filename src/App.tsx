import { PlusCircle } from "phosphor-react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { v4 as uuidv4 } from "uuid";
import { NoTask } from "./components/NoTask";

const tasks = [
    {
        id: uuidv4(),
        isComplete: false,
        content:
            "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
        id: uuidv4(),
        isComplete: false,
        content:
            "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
        id: uuidv4(),
        isComplete: false,
        content:
            "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
        id: uuidv4(),
        isComplete: true,
        content:
            "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
        id: uuidv4(),
        isComplete: true,
        content:
            "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
];

function App() {
    return (
        <div>
            <Header />
            <main className={styles.wrapper}>
                <form action="#" className={styles.FormAddTask}>
                    <input type="text" placeholder="Adicione uma nova tarefa" />
                    <button type="submit">
                        Criar <PlusCircle size={16} />
                    </button>
                </form>

                <section className={styles.tasks}>
                    <header className={styles.status}>
                        <strong className={styles.blue}>
                            Tarefas criadas <span>0</span>
                        </strong>
                        <strong className={styles.purple}>
                            Concluidas <span>2 de 5</span>
                        </strong>
                    </header>

                    <ul className={styles.taskList}>
                        {tasks.map((task) => (
                            <Task
                                key={task.id}
                                content={task.content}
                                isComplete={task.isComplete}
                            />
                        ))}
                    </ul>

                    <NoTask />
                </section>
            </main>
        </div>
    );
}

export default App;
