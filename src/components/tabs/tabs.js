import React from 'react'
import './tabs.css';
import DeleteIcon from '@material-ui/icons/Delete';

function App(props) {
    return (
        <div className="tab">
            <div>
                <div><b>{props.date}</b></div>
                <div >{props.content}</div>
            </div>
            {props.filter ===""?<DeleteIcon onClick={() => props.delete(props.index)} />:null}
        </div>
    );
}

export default App;