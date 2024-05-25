// the steps to make it a router 
// here to call express 
const express = require('express');
// here we use express.Router() and put it in a variable called router that we will use instead of app in our methods
const router = express.Router();
// here we called languages array of objects from my-data module but here we have written '../my-data' 2 dots instead of 1 as this file is in a folder called routes unlike app file that is in the same folder of the module my-data
let { languages } = require('../my-data');


// here we used router instead of app and we don't need to write the route we just put '/' as this module will export the router and we will specify the route when we call it in our app
// if we have a parameter we put it after the / '/:id'
/*router.put("/:id", (req, res) => {
 
  const { id } = req.params; 
  const { name } = req.body; 
  const lang = languages.find((l) => l.id === Number(id)); 
  if (!lang) {
    
    return res.status(404).json({
      
      success: false,
      msg: `id ${id} is not found`,
    });
  }
  
  const newList = languages.map((l) => {
   
    if (l.id === Number(id)) {
      
      l.language = name;
    }
    return l; 
  });

  res.status(200).json({
    
    success: true,
    data: newList,
  });
});


router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const lang = languages.find((l) => l.id === Number(id));
  if (!lang) {
    return res.status(404).json({
      success: false,
      msg: `id ${id} is not found`,
    });
  }

  const newList = languages.filter((l) => l.id !== Number(id)); 
  res.status(200).json({
    success: true,
    data: newList, 
  });
});*/

// here we imported the 2 functions that we took from PUT and DELETE methods and wrote them in a controller file called languages-controller.js in controllers folder
const { updateLanguages , deleteLanguages } = require('../controllers/languages-controller');

// and here instead of writing the function of the method we use the functions we already made in the controller file
router.put('/:id', updateLanguages);
router.delete('/:id', deleteLanguages);

// this is a fast way to write the methods that have exactly the same route and parameters we specify the route in route function then we use .put .delete etc
/*router.route('/:id').put(updateLanguages).delete(deleteLanguages);*/


// here our module exports router
module.exports = router;
