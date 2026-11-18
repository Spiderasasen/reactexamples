import {useEffect} from 'react'
import {useContext} from "react";
import {SharedNameContext} from "../expample1WithContext/Example1WithContext.jsx";

export default function MyNameIs() {
    const {lName} = useContext(SharedNameContext);

    useEffect(() => {
        console.log("In the useEffect for MyNameIs")
    }, []);

    return (
        <h2>My Name is YYYY</h2>
    );
}