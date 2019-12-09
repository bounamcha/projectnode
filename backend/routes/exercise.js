const express = require('express');
const router = express.Router();
const Exercise =require('../models/exercise.model');

router.route('/').get((req,res)=>{ 
    Exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error : '+err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const  password = req.body.password;
    const confirmepass = req.body.confirmepass;

    const newExercise = new Exercise({
        username,
        email,
        password,
        confirmepass
    });

    newExercise.save()
    .then(() => res.json('exercise add'))
    .catch(err => res.status(400).json('Error : '+err));
});

router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err=> res.status(400).json('Error : ' +err));
});

router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('exercise delete'))
    .catch(err=> res.status(400).json('Error : ' +err));
});

router.route('/update/:id').post ((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise => {
        const username = req.body.username;
        const demail = req.body.email;
        const password =req.body.password;
        const confirmepass =req.body.confirmepass;

        exercise.save()
    .then(() => res.json('exercise update'))
    .catch(err => res.status(400).json('Error : ' +err));
    })
    .catch(err => res.status(400).json('Error : ' +err));
});
module.exports = router;