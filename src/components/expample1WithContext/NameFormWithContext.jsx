import {useContext} from 'react'
import {SharedNameContext} from './Example1WithContext.jsx'

export default function NameFormWithContext() {
    const {fName,setFName} = useContext(SharedNameContext);
    const {lName,setLName} = useContext(SharedNameContext);

    function handleChange(event) {
        if (event.target.name == "FirstName") {
            setFName(event.target.value)
        } else {
            setLName(event.target.value)
        }
    }
    return (
        <form>
            <input type="text" name="FirstName" onChange={handleChange} placeholder="Enter First Name"/><br/>
            <input type="text" name="LastName"  onChange={handleChange} placeholder="Enter Last Name" />
        </form>
    );
}