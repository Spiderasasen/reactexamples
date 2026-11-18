import './Example1.css'
import NameForm from './NameForm.jsx'
import HelloOutput from './HelloOutput.jsx'
import {useState} from 'react'

export default function Example1() {
    const [firstName, setFirstName] = useState('Jane')
    const [lastName, setLastName] = useState('Doe')

    return (
        <>
            <h1> Share data across components </h1>
            <div className="container">
                <div className="child">
                    <NameForm setFirstName={setFirstName} setLastName={setLastName} />
                </div>
                <div className="child">
                    <HelloOutput firstName={firstName} lastName={lastName}/>
                </div>
            </div>
        </>
    );
}