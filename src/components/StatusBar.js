import styles from "./StatusBar.css";
import {useDispatch, useSelector} from "react-redux";
import {Component} from 'react';

export function StatusBar(props) {
    const appStatus = useSelector((state) => state.status);
    const dispatch = useDispatch();
    const loadErrors = appStatus.hasError;
    console.log("Error"+ appStatus.hasError);
    const statusClass = loadErrors ? styles.error: styles.success;
    const handleRetry = () => {

    };
    if(loadErrors) {
        return (
            <div className={statusClass}>
                <span> {appStatus.message} </span>
                <button onClick={handleRetry}>retry</button>
            </div>
        );
    }
    return(
        <div/>
    )
}
