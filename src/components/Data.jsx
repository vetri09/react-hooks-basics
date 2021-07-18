import React, { useState, useEffect, useContext } from 'react';

export default function Data() {
    // const [Age, setAge] = useState(23)
    // const [Sibling, setSibling] = useState(1)
    const [state, setState] = useState({age: 23, sibling: 1})
    const {age, sibling} = state
    const [count, setCount] = useState(0)
    const [Theme, setTheme] = useState("light")
    const ThemeContext = React.createContext({Theme})
    const theme = useContext(ThemeContext)
    // // const [Message, setMessage] = useState("")
    // const [messageObj, setMessage] = useState({ message: '', id: 1 });
    // const handleClick=(val)=>{
    //     console.log(val)
    //     // setState({
    //     //     ...state,
    //     //     [val]: state[val]+1
    //     // })
    // }
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    const ageClick = () => {
        setState({
            ...state,
            age: age+1
        })
    }
    const siblingClick = () => {
        setState({
            ...state,
            sibling: sibling+1
        })
    }
    // doubt 2
    const themeChange = () => {
        const themeName = (Theme==="light"?"dark":"light")
        setTheme(themeName)
        console.log(Theme)
        console.log(themeName)
    }
    return (
        <div style={ {backgroundColor: theme === {Theme} ? "#bebebe" : "#444444", color: theme === {Theme} ? "#444444" : "#bebebe"} }>
            <button onClick={themeChange}>Theme change</button>
            <p>Today im {age} years old</p>
            <p>and i have {sibling} siblings</p>
            <button onClick={ageClick}>Get older</button>
            <button onClick={siblingClick}>More siblings!</button>
            <p>count value is {count}</p>
            <button onClick={()=>{setCount(0)}}>reset</button>
            <button onClick={()=>{setCount(prev=>prev+1)}}>increase</button>
            <button onClick={()=>{setCount(count-1)}}>decrease</button>
            {/* <button onClick={()=>{setAge(prev=>prev+1)}}>Get older!</button>
            <button onClick={()=>{setSibling(Sibling+1)}}>More siblings!</button><br /> */}


            {/* <input type="text" value={messageObj.message} 
            // // // doubt 1
            // onChange={e => {
            //     // messageObj.message = e.target.value;
            //     // setMessage(messageObj)
            //     // why this doesnt work
            //     // setMessage(prev=>prev+val)
            //     const newMessageObj = { message: e.target.value };
            //     setMessage(newMessageObj)
            // } }
            onChange={e => {
                const val = e.target.value;
                setMessage(prevState => {
                  return { ...prevState, message: val }
                });
              }}
            />
            <br />
            <strong>{messageObj.id} : {messageObj.message}</strong> */}
        </div>
    )
}