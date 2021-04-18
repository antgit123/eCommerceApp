import styles from "./StatusBar.css";
import {Component} from 'react';
import { connect} from 'react-redux';

class StatusBar extends Component {
    constructor(){
        super();
    }
    render() {
        const {status} = this.props;
        const loadErrors = status.hasError;
        const statusClass = loadErrors ? styles.error: styles.success;
        if (loadErrors) {
            return (
                <div className={statusClass}>
                    <span> {status.message} </span>
                    <button>retry</button>
                </div>
            );
        }
        return (
            <div/>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        status: state.status
    };
};

export default connect(mapStateToProps,{
}) (StatusBar);
