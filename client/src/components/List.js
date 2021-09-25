import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
   useHistory
} from "react-router-dom";

export default function List() {
   const [list, setList] = useState([]);
   const history = useHistory();
   const change = () => {
      history.push('/add');
   }
   const getPeople = () => {
      axios
         .get('http://loacalhost:3000/people')
      .then(response => {
         setList(response.data);
      })
   }

   useEffect(() => {
      getPeople();
   }, []);


   
   return (
      <div>
         {list.length > 0 ?(
            list.map((person, i) => {
               console.log(person.name);
               return <ul key={i} className="card">
                        <div className="title">User</div>
                           <div className="box">
                              <li>Nome: <strong>{person.name}</strong></li>
                              <li>Cognome: <strong>{person.lastName}</strong></li>
                              <li>Età: <strong>{person.age}</strong></li>
                           </div>

                     </ul>
            })
         )

         : (
            <div className="empty">
               <p>La lista delle persone è vuota.. </p>
               <button onClick={change}>Crea</button>
            </div>
            )
         }     
         
      </div>
   )
}
