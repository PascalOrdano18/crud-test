import { useState } from 'react';
import './App.css';
import Axios from 'axios';


function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);



  const [employeeList, setEmployeeList] = useState([]);



  const AddEmployee = () => {
    Axios.post('http://localhost:3001/create',
     {name: name, 
      age: age, 
      country: country, 
      position: position, 
      wage: wage}).then(() => console.log('Success'))
  }

  const GetEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data)
  });
};



  return (
    <div className="App">

      <div className='information'>
        <label>Name:</label>
        <input type='text' onChange={ e => { setName(e.target.value) }}/>

        <label>Age:</label>
        <input type='number' onChange={ e => { setAge(e.target.value) }} />

        <label>Country:</label>
        <input type='text' onChange={ e => { setCountry(e.target.value) }} />

        <label>Position:</label>
        <input type='text' onChange={ e => { setPosition(e.target.value) }} />

        <label>Wage (year):</label>
        <input type='text' onChange={ e => { setWage(e.target.value) }} />

        <button onClick={AddEmployee}>Add Employee</button>

      </div>

      <hr />
      
      <button onClick={GetEmployees}>Show Employees</button>

      { employeeList.map( (val, key) => {
        return(
          <div className='employee'>
            <h1>{val.name}</h1>
          </div>
        )
      } ) }


    </div>
  );
}

export default App;
