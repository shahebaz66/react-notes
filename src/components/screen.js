import React, { useState } from 'react'
import './screen.css';
import Tab from '../components/tabs/tabs';
import Header from '../components/static/header'
import Filter from './filtering'


function App() {
    var [istate, setIState] = useState([]);
    var [state, setState] = useState([]);
    var [filter, setFilter] = useState("");

    const add = (content, date) => {
        var data = date.split("-");

        setIState([...istate, { content: content, date: date, year: data[0], month: data[1], day: data[2] }])
        setState([...istate, { content: content, date: date, year: data[0], month: data[1], day: data[2] }])
    }
    const deleteS = (index) => {
        var a = [...istate]
        if (a.length > 1) {
            a.splice(index, 1)
            setIState(a)
            setState(a)
        } else {
            setIState([])
            setState([])
        }

    }
    const sort = (value) => {
        console.log(value);

        if (value === 'new') {
            var array = [...state]
            array.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });
            setState(array)
        } else {
            var array1 = [...state]
            array1.sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
            });

            setState(array1)
        }
    }
    const filtering = (value) => {
        setFilter(value)
    }
    const result = (e) => {


        var value = e.target.value;
        if (value !== "") {
            var fi = [...istate]

            var condition = new RegExp(value);




            var result = fi.filter(function (el) {
                return condition.test([el[filter]]);
            });



            setState(result)
        } else {
            setState(istate)
        }


    }
    const clear = () => {
        setFilter("")

        setState(istate)
    }
    return (
        <div>
            <Header add={add} />
            {filter !== "" ? <h6 className="clear" onClick={clear}> clear filter</h6> : null}
            <Filter result={result} filtering={filtering} sort={sort} filter={filter} />
            <div className="screen">

                {state.map((i, index) => {
                    return <Tab filter={filter} index={index} key={index} delete={deleteS} date={i.date} content={i.content} />
                })}

            </div>
        </div>
    );
}

export default App;