import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {
   useHistory
} from "react-router-dom";


export default function Add() {
   const [name, setName] = useState('');
   const [lastName, setLastName] = useState('');
   const [age, setAge] = useState(0);
   const history = useHistory();

   const add = () => {
      console.log(name);
      console.log(lastName);
      console.log(age);

      axios
         .post('http://loacalhost:3000/people', {
            name: name,
            lastName: lastName,
            age: age
         })
         .then(response => {
            history.push('/');
         })
   }

   return (
      <div className="App">
         <input type="text" placeholder="NAME" onChange={event => {setName(event.target.value)}}></input>
         <input type="text" placeholder="LASTNAME" onChange={event => { setLastName(event.target.value)} }></input>
         <input type="number" placeholder="AGE" onChange={event => { setAge(event.target.value) }}></input>
         <button type="button" onClick={add}>ADD</button>
      </div>
   )
}
