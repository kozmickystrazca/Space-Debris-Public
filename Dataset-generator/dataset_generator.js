//Deutsche Telekom IT Solutions Slovakia 2022
//Created by: Ádám Tamáš

fs = require("fs");
const csvToJson = require('convert-csv-to-json');

const tleTXT = './data/3le.txt'; //TLE text file
const satcatCSV = './data/satcat.csv';  //CSV version of the NORAD satellite catalog


function txt_to_json_TLE(filename)  //Input:TLE text file   Output:JSON version of it
{
    let satlist = [];
    let rawData = fs.readFileSync(filename, 'utf-8');
    const tleData = rawData.replace(/\r/g, '')
          .split(/\n(?=[^12])/)
          .filter(d => d)
          .map(tle => tle.split('\n'));
    for(var i in tleData)
    {
        let tleCup = tleData[i];
        let slicedLine = tleCup[2].split(' ');
        var satCup = {  //One element of the json list
            id : parseInt(slicedLine[1]),
            line1 : tleCup[1],
            line2 : tleCup[2]
        };
        satlist.push(satCup);
    }
    return satlist;
}

function csv_to_json_SATCAT(filename)   //Input: CSV satellite catalog Output:JSON version of satellite catalog
{
    return csvToJson.formatValueByType().fieldDelimiter(',').getJsonFromCsv(filename);
}

function addOrbitType(sat)  //Add a new atribute (orbit) to the satellite (only one object at once)
{
    let avgAlt = ( sat.APOGEE + sat.PERIGEE ) / 2;

    if(avgAlt<=2000)
    {
        sat["ORBIT_ALTITUDE_TYPE"] = "LEO";
    }else if(avgAlt<35586)
    {
        sat["ORBIT_ALTITUDE_TYPE"] = "MEO";
    }else if(avgAlt<=35986)
    {
        sat["ORBIT_ALTITUDE_TYPE"] = "GSO";
    }else{
        sat["ORBIT_ALTITUDE_TYPE"] = "HEO";
    }
    return sat;
}

  
function getByNoradID(id, dataset) {    //Return every object with the given ID. Most of the time the list contain only 1 or 0 element
      return dataset.filter(
          function(catalog){ return catalog.NORAD_CAT_ID == id }
      );
    }

    function data_mixer(tleJson, satcatJson)    //Create a new dataset which contains all the TLE and NORAD satcat data
    {
        let satcup={};
        let tlecup={};
        let newjson=[];
        for(var i in tleJson)
        {
            tlecup = tleJson[i];
            if(tlecup.id == '' || tlecup.line2=="" || tlecup.line1=="")
            {
                continue;
            }
            
            satcup = getByNoradID(tlecup.id, satcatJson);
            if(satcup.length === 0)
            {
                continue;
            }
        
            satcup = addOrbitType(satcup[0]);
            var newSatData = {
                info : satcup,
                tle: {
                    line1: tlecup.line1,
                    line2: tlecup.line2
                }
              };
              
            newjson.push(newSatData);
            if(i % 2500 == 0 && i!=0)
            {
                console.log(i + " object were succesfully created and added to the main dataset...");
            }
        }
        return newjson;
    }  
    
function data_simplifier(dataset)   //Simplify the dataset for the bare minimum, which still enough to animate them
{
    let satcup = {};
    let satlist = [];
    let optimalizationTier = 0;
    for(var i in dataset)
    {
        satcup = dataset[i];
        if(satcup.info.ORBIT_ALTITUDE_TYPE == "HEO")
        {
            continue;
        }
        let date1 = new Date(satcup['info']['LAUNCH_DATE']);
        optimalizationTier = (i % 4) + 1;
        var newcup = {
            name : satcup['info']['OBJECT_NAME'],
            id : satcup['info']['NORAD_CAT_ID'],
            satellite : (satcup['info']['OBJECT_TYPE'] == 'PAY' ? true : false),
            year : date1.getFullYear(),
            orbit : satcup['info']['ORBIT_ALTITUDE_TYPE'],
            optTier : optimalizationTier,
            line1 : satcup['tle']['line1'],
            line2 : satcup['tle']['line2']
        }
        satlist.push(newcup);
        if(i % 5000 == 0 && i!=0)
        {
            console.log(i + " object were succesfully simplified...");
        }
    }
    return satlist;
}    

function main(){
    console.log("Program has been started...");
    let satcatJson = csv_to_json_SATCAT(satcatCSV);
    console.log("NORAD satellite catalog was successfully converted from CSV to JSON...")
    let tleJson = txt_to_json_TLE(tleTXT);
    console.log("The TLE data was successfully convertod from TXT to JSON...");
    let mainDataset = data_mixer(tleJson, satcatJson);
    console.log("The main dataset was successfully created...");
    let simplifiedData = data_simplifier(mainDataset);
    console.log("The main dataset was simplified successfully.")
    fs.writeFileSync("./data/main_satellite_data.json", JSON.stringify(mainDataset));
    console.log("The main dataset was saved in ./data/main_satellite_data.json"); 
    fs.writeFileSync("./data/simplified_satellite_data.json", JSON.stringify(simplifiedData));
    console.log("The simplified dataset was saved in ./data/simplified_satellite_data.json"); 
    console.log("Done!"); 
}

main();