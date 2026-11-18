import {useEffect, useState} from 'react'
import {useContext} from "react";
import {SharedNameContext} from "../expample1WithContext/Example1WithContext.jsx";
import {getRandomUser} from "../../services/apiService.js";

export default function MyNameIs() {
    const {lName} = useContext(SharedNameContext);
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        console.log("In the useEffect for MyNameIs");

        //getting the random user
        getRandomUser().then(apiResult => {
            console.log(apiResult);
            setUser(`${apiResult.results[0].name.first} ${apiResult.results[0].name.last}`);
            setEmail(apiResult.results[0].email)
        });

    }, []);

    return (
        <>
            <h2>My Name is {user}</h2>
            <br/>
            <h3>My email is {email}</h3>
        </>
    );
}