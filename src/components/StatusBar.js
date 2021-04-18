import styles from "./StatusBar.css";
import {useDispatch, useSelector} from "react-redux";

export function StatusBar() {
    const appStatus = useSelector((state) => state.status);
    const dispatch = useDispatch();
    const loadErrors = appstatus.hasError;
    const statusClass = loadErrors ? styles.error: styles.success;
    const handleRetry = () => {

    };
    if(loadErrors) {
        return (
            <div className={styles.error}>
                <span> {message} </span>
                <button onClick={handleRetry}>retry</button>
            </div>
        );
    }
    return(
        <div/>
    )
}
