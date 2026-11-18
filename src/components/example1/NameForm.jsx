function NameForm({setFirstName, setLastName}) {
    function handleChange(event){
        console.log(event);
        if(event.target.name === "firstName"){
            console.log(`first name: ${event.target.value}`);
            setFirstName(event.target.value);
        }
        else{
            console.log(`last name: ${event.target.value}`);
            setLastName(event.target.value);
        }
    }

    return(
      <form>
          {/*input 1*/}
          <input type="text" name="firstName" placeholder="Enter First Name" onChange={handleChange} />
          <br/>
          {/*input 2*/}
          <input type="text" name="lastName" placeholder="Enter Last Name" onChange={handleChange} />
      </form>
    );
}
export default NameForm;