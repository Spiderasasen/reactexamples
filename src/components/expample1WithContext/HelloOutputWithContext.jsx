import {useContext} from 'react';
import {SharedNameContext} from './Example1WithContext.jsx';

export default function HelloOutputWithContext() {
    const {fName,lName} = useContext(SharedNameContext);

    return (
        <h1>Hello {fName} {lName}</h1>
    );
}