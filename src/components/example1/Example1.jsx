import './Example1.css'
import NameForm from './NameForm.jsx'
import HelloOutput from './HelloOutput.jsx'

export default function Example1() {
    return (
        <>
            <h1> Share data across components </h1>
            <div className="container">
                <div className="child">
                    <NameForm/>
                </div>
                <div className="child">
                    <HelloOutput/>
                </div>
            </div>
        </>
    );
}