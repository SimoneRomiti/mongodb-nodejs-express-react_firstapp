const { json } = require('express');
const express = require('express');
const router = express.Router();

const Person = require('../models/person')

// get All
router.get('/', async (req, res) => {
   try{
      const people = await Person.find();
      res.send(people);
   }
   catch(err){
      res.status(500).json({message: err.message})
   }
});

// get one
router.get('/:id', async(req, res) => {

   try{
      const person = await Person.findById(req.params.id);
      res.send(person);
   }
   catch(err){
      res.status(500).json({message: err.message});
   }
  
})

// create one
router.post('/', async (req, res) => {
   const person = new Person({
      name: req.body.name,
      lastName: req.body.lastName,
      age: req.body.age
   })

   try {
      const newPerson = await person.save();
      res.send(newPerson);
   }
   catch(err){
      res.status(400).json({message: err.message})
   }

})

// update one
router.put('/:id', async(req, res) => {
   try {
      const person = await Person.findById(req.params.id);
      if(req.body.name != null){
         person.name = req.body.name
      }
      if (req.body.lastName != null) {
         person.lastName = req.body.lastName
      }
      if (req.body.age != null) {
         person.age = req.body.age
      }
      person.save();
      res.json(person);
   }
   catch (err) {
      res.status(500).json({ message: err.message });
   }
})

// delete one
router.delete('/:id', async (req,res) =>{
   try {
      const person = await Person.findById(req.params.id);
      person.remove();
      res.json({message: 'Eliminato correttamente'})
   }
   catch (err) {
      res.status(500).json({ message: err.message });
   }
})

module.exports = router;