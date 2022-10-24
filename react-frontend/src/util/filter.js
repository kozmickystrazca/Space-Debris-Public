//Deutsche Telekom IT Solutions Slovakia 2022
//Created by: Ádám Tamáš

export function dataFilter(year, type, orbit, data, isOptimazed) //type: ALL, SAT, JUNK
    {
        let result_data = getByYear(data, year);
        result_data = getByOrbit(result_data, orbit);
        
        switch(type){
            case "SAT":
                result_data = getBySatellite(result_data, true);
                break;
            case "JUNK":
                result_data = getBySatellite(result_data, false);
                break;
        }
        if(isOptimazed)
        {
            result_data = optimazeData(result_data);
        }
        return result_data;
    }
 

 export function orbitParamGenerator(leo, meo, gso/*, heo*/) //ONLY TRUE/FALSE
 {
    let new_json = {
        LEO : leo,
        MEO : meo,
        GSO : gso,
        /*HEO : heo*/
    };
    return new_json;
 }
 
 
function getBySatellite(own_data, isSat) {
        return own_data.filter(
            function(sat)
            {
              return sat['satellite'] == isSat;
            }
        );
    }
    
function getByYear(own_data, year) {
        let yearcup = Number.isInteger(year) ? year : parseInt(year);
        return own_data.filter(
            function(sat)
            { 
              return sat.year <= yearcup;
            }
        );
      }

function getByOrbit(own_data, orbit){
    return own_data.filter(
        function(sat)
        {
            if(orbit.LEO == true && sat.orbit == 'LEO')
            {
                return true;
            }
            if(orbit.MEO == true && sat.orbit == 'MEO')
            {
                return true;
            }
            if(orbit.GSO == true && sat.orbit == 'GSO')
            {
                return true;
            }
            /*if(orbit.HEO == true && sat.orbit == 'HEO')
            {
                return true;
            }*/
            return false;
        }
    );
}

function optimazeData(dataset)
{
    let filterOne = getRndInteger(1,4);
    let filterTwo = 0;
    do{
        filterTwo = getRndInteger(1,4);
    }while(filterOne==filterTwo);
    let dataCup = dataset.filter(
        function(sat)
        {
            return sat.orbit == "LEO" ? sat.optTier == filterOne : 
            (sat.optTier == filterOne || sat.optTier == filterTwo) ;
        }
    );
    return dataCup;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
