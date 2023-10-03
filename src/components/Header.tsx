import { Atom } from "phosphor-react";
import styles from "./Header.module.css";
export function Header() {
    return (
        <header className={styles.header}>
            <Atom />
            <strong>
                to<span>do</span>
            </strong>
        </header>
    );
}
