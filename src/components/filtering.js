import React from 'react'
import { Dropdown } from 'react-bootstrap'

const Filter = (props) => {
    return (

        <div className="drop">
            <Dropdown style={{ margin: "10px" }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => props.sort('new')}>Newest</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.sort('old')}>Oldest</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ margin: "10px" }}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Filter By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => props.filtering('day')}>Date</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.filtering('month')}>Month</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.filtering('year')}>Year</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {props.filter !== "" ? <input style={{marginBottom:"5px"}} onChange={(e) => props.result(e)} /> : null}
        </div>
    )
}

export default Filter