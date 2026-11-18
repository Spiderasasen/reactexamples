import './Example1.css'
import NameFormWithContext from './NameFormWithContext.jsx'
import HelloOutputWithContext from './HelloOutputWithContext.jsx'

import {createContext,useState} from 'react'
import MyNameIs from "../mynameis/MyNameIs.jsx";

export const SharedNameContext = createContext();

export default function Example1WithContext() {
    const [fName,setFName] = useState("John");
    const [lName,setLName] = useState("Doe");

    return (
        <>
            <SharedNameContext.Provider value={{fName,setFName,lName,setLName}}>
                <h1> Share data across components </h1>
                <div className="container">
                    <div className="child">
                        <NameFormWithContext />
                    </div>
                    <div className="child">
                        <HelloOutputWithContext />
                    </div>
                </div>
                <div>
                    <MyNameIs />
                </div>
            </SharedNameContext.Provider>
        </>
    );
}