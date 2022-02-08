const express = require('express');
const DetailModel = require('../models/detailModel')

/**
 * 
 */
const saveDetails = async(req, res) => {
    console.log("abcccc")
    let data = req.body
    console.log(req.body,"-----")
    if(Object.keys(data).length == 0) {    
      return res.send({status:'ok', msgType: 'invalidRequest', msg: 'Kindly fill the required fields.'})
    }
    // Create object with data
    const userDetails =  new DetailModel({
      email:req.body.email,
			userName:req.body.userName,
			fullName:req.body.fullName
    })
    await userDetails.save()
    .then(data => {
      console.log(data)
      res.send(data)
      // status(200)
    }).catch ((error)=> {
      console.log(error.message);
     })
}

const getDetails = async(req, res) => {
  try{
    await DetailModel.find({})
    .then((result)=>{
      console.log(result, "<<--allrecords")
      res.send(result)
    })
     .catch ((error)=> {
      console.log(error.message);
     })  
  } catch (err) {
    res.send(err)
    console.log(error.message);
    process.exit(1);
  }   
}

module.exports = {
    saveDetails,
    getDetails 
  }