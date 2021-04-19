import "./StatusBar.css";
import {Component} from 'react';
import { connect} from 'react-redux';
import {Row } from 'react-bootstrap';

class StatusBar extends Component {
    constructor(){
        super();
    }
    render() {
        const {statusObj} = this.props;
        if(!statusObj.status){
            return (
                <div/>
            )
        }
        const loadErrors = statusObj.status.hasError;
        const statusClass = loadErrors ? "error": "success";

        return (
            <Row className={`mx-4 ${statusClass}`}>
                <span> {statusObj.status.message} </span>
            </Row>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        statusObj: state.status
    };
};

export default connect(mapStateToProps,{
}) (StatusBar);
