import { Atom } from "phosphor-react";
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.wrapper}>
            <header>
                <Atom /> todo
            </header>
            <main>
                <form action="#">
                    <input type="text" />
                    <button type="submit">Criar</button>
                </form>
                <section>
                    <header>
                        <strong>
                            Tarefas criadas <span>0</span>
                        </strong>
                        <strong>
                            Concluidas <span>0</span>
                        </strong>
                    </header>
                    <ul>
                        <li>
                            <strong>
                                Você ainda não tem tarefas cadastradas
                            </strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
