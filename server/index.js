const express = require("express");
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const errmsg = {errmsg:"Error during processing data. Please chceck your request parameters!"};

const data = require("./data/main_satellite_data.json");
//Deutsche Telekom IT Solutions Slovakia 2022
//Created by: Ádám Tamáš

const simplified_data = require("./data/simplified_satellite_data.json");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(compression());
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => { //Test ping for server
    res.json({ message: "Hello from server! Vesmirny strazca" });
  });


  app.get("/data/animation", (req, res) => {  //To get the simplified dataset (enought to animate and fitler the satelitte)
    try{
      res.json(simplified_data);
    }catch(e)
    {
      res.json(errmsg);
    }
  });

  app.get("/data", (req, res) => { //for queries (year, status, type) Without query parameters, you will got the whole dataset
    try{
      let filtered_data  = data;
      if(req.query.year != null)
      {
        filtered_data = getByYear(req.query.year);
      }
      if(req.query.type != null)
      {
        if(Array.isArray(req.query.type))
        {
            filtered_data = getByMultiplyType(req.query.type, filtered_data);
        }else{
          filtered_data = getByType(req.query.type, filtered_data);
        }
      }
      if(req.query.status != null)
      {
        if(Array.isArray(req.query.status))
        {
          filtered_data = getByMultiplySatus(req.query.status, filtered_data);
        }else{
          filtered_data = getBySatus(req.query.status, filtered_data);
        }
      }
      res.json( filtered_data );
    }catch(e)
    {
      res.json(errmsg);
    }
   
  });

  app.get("/data/id/:satid", (req, res) => {  //filter by id. You will got the first satellite with the given id
    try{
      let cup = getByNoradID(req.params.satid);
      if(cup.length != 0)
      {
        cup = cup[0];
      }
      res.json( cup );
    }catch(e){
      res.json(errmsg);
    }
  });

  app.get("/data/year/:year", (req, res) => { //Filter by the year (from year zero to the given year)
    try{
      let cup = getByYear(req.params.year);
      res.json( cup );
    }catch(e)
    {
      res.json(errmsg);
    }
  });

  app.get("/data/year/:year/type/:type", (req, res) => {  //Our main route for alpha demo, to filter the dataset by year and (specific) type
    try{
      let filtered_data = getByYear(req.params.year);
    if(req.params.type=="SAT")
    {
      filtered_data = getByType("PAY", filtered_data);
    }else if(req.params.type == "JUNK")
    {
      filtered_data = getNonSatellite(filtered_data);
    }else{
      filtered_data = {Errmsg:"Bad request"};
    }
    res.json( filtered_data );
    }catch(e){
      res.json(errmsg);
    }
  });

  app.get("/data/type/:type", (req, res) => { //Filter data by type
    try{
      let cup = getByType(req.params.type,'');
      res.json( cup );
    }catch(e){
      res.json(errmsg);
    }
  });

  app.get("/data/status/:status", (req, res) => { //Filter data by current status (we know only the current status)
    try{
      let cup = getBySatus(req.params.status, '');
    res.json( cup );
    }catch(e){
      res.json(errmsg);
    }
  });

  app.get("/data/orbit/:orbit", (req, res) => { //filter by orbit type/hight (selfgenerated) LEO, wMEO, GSO, HEO
    try{
      let cup = getByOrbit(req.params.orbit, '');
    res.json( cup );
    }catch(e){
      res.json(errmsg);
    }
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});




function getByNoradID(id) { //function to find the satellite by NORAD CAT ID
  return data.filter(
      function(sat)
      {
        //console.log('ID: ' + JSON.stringify(sat));
        return sat['info']['NORAD_CAT_ID'] == id; 
      }
  );
}

function getByOrbit(orbit, own_data) {  //function to filter the data by orbit type/hight
  let data_cup = data;
  if(own_data != '')
  {
    data_cup = own_data;
  }
  return data_cup.filter(
      function(sat)
      {
        //console.log('ID: ' + JSON.stringify(sat));
        return sat['info']['ORBIT_ALTITUDE_TYPE'] == orbit; 
      }
  );
}

function getByYear(year) {  //function to filter the data by year
  
  return data.filter(
      function(sat)
      { 
        date1 = new Date(sat['info']['LAUNCH_DATE']);
        //console.log('Cucc: ' + sat['info']['LAUNCH_DATE']);
        //date2 = new Date(year);
        //console.log("CatYear: " + date1.getYear() + " WantYear: " + parseInt(year));
        return date1.getFullYear() <= parseInt(year);
      }
  );
}

function getByType(type, own_data) {  //function to filter the data by type
  if(type=='RB'){type='R/B'}
  let data_cup = data;
  if(own_data != '')
  {
    data_cup = own_data;
  }
  return data_cup.filter(
      function(sat)
      {
        //console.log('ID: ' + JSON.stringify(sat));
        return sat['info']['OBJECT_TYPE'] == type;
      }
  );
}

function getNonSatellite(own_data) {  //function to get all the nonsatellite object. (In our case every payload is a satellite so the space stations too)
  return own_data.filter(
      function(sat)
      {
        return sat['info']['OBJECT_TYPE'] != "PAY";
      }
  );
}

function getByMultiplyType(type, own_data) {  //filter by multiple type (parameter "type" is an array)
  let data_cup = data;
  if(own_data != '')
  {
    data_cup = own_data;
  }
  return data_cup.filter(
      function(sat)
      {
        let satcup = sat['info']['OBJECT_TYPE'];
        for(let i in type)
        {
          if(type[i]=='RB'){type[i]='R/B'}
          if(satcup == type[i])
          {
            return true;
          }
        }
        return  false;
      }
  );
}

function getBySatus(status, own_data) { //status + = %2B in query. Function is to filter the data by status
  let data_cup = data;
  if(status=='UNK'){status='?'}
  if(own_data != '')
  {
    data_cup = own_data;
  }
  return data_cup.filter(
      function(sat)
      {
        //console.log('ID: ' + JSON.stringify(sat));
        return sat['info']['OPS_STATUS_CODE'] == status;
      }
  );
}

function getByMultiplySatus(status, own_data) { //function to filter the data by different status (status should be an array). 
  let data_cup = data;
  if(own_data != '')
  {
    data_cup = own_data;
  }
  return data_cup.filter(
      function(sat)
      {
        let satcup = sat['info']['OPS_STATUS_CODE'];
        for(let i in status)
        {
          if(status[i]=='UNK'){status[i]='?'}
          if( satcup == status[i] )
          {
            return true;
          }
        }
        return false;
      }
  );
}