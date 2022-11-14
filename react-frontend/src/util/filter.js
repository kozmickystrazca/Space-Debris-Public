//Deutsche Telekom IT Solutions Slovakia 2022
//Created by: Ádám Tamáš

/*
Return a filtered list according to the input parameters
satellite, junk and isOptimazed should be bool
orbit should be an object generated with function orbitParamGenerator(leo, meo, gso)
data should be the list of all object (optimazed/animation dataset)
*/
export function dataFilter(year, satellite, junk, orbit, data, isOptimazed) //satellite true/false, junk: true/false
    {
        if(!satellite && !junk)
        {
            return [];
        }
        let new_data = [];
        let converted_year = Number.isInteger(year) ? year : parseInt(year);

        let filterOne = getRndInteger(1,4);
        let filterTwo = 0;
        do{
            filterTwo = getRndInteger(1,4);
        }while(filterOne==filterTwo);

        for(let i in data)
        {
            let satCup = data[i];

            let isOk =  getByYear(satCup.year, converted_year) &&
                        getByOrbit(satCup.orbit, orbit) &&
                        getBySatellite(satCup.satellite, satellite, junk);

            if (isOk && isOptimazed)
            {
                isOk = optimazeData(satCup.orbit, satCup.optTier, filterOne, filterTwo);
            }
            if(isOk)
            {
                new_data.push(satCup);
            }
        }
        return new_data;
    } 

/*
Return the count of satellites and junk according to input parameters.
Return an object with two keys: satellite and junk with the of their type
*/
export function dataFilterCounter(year, satellite, junk, orbit, data, isOptimazed) //satellite true/false, junk: true/false
{
    let result = {
        satellite : 0,
        junk : 0
    }
    if(!satellite && !junk)
    {
        return result;
    }

    let converted_year = Number.isInteger(year) ? year : parseInt(year);

    let filterOne = 0;
    let filterTwo = 0;
    if(isOptimazed)
    {
        filterOne = getRndInteger(1,4);
        do{
            filterTwo = getRndInteger(1,4);
        }while(filterOne==filterTwo);
    }
    

    for(let i in data)
    {
        let satCup = data[i];

        let isOk =  getByYear(satCup.year, converted_year) &&
                    getByOrbit(satCup.orbit, orbit) &&
                    getBySatellite(satCup.satellite, satellite, junk);

        if (isOk && isOptimazed)
        {
            isOk = optimazeData(satCup.orbit, satCup.optTier, filterOne, filterTwo);
        }
        if(isOk)
        {
            if(satCup.satellite)
            {
                result.satellite++;
            }else{
                result.junk++;
            }
        }
    }
    return result;
} 

/*
Create an object with the given bool parameters, so we can it use easily as a function input
*/
 export function orbitParamGenerator(leo, meo, gso) //ONLY TRUE/FALSE
 {
    let new_json = {
        LEO : leo,
        MEO : meo,
        GSO : gso,
    };
    return new_json;
 }
 
 /*
 return true, if the satellite's type corresponds for the input parameters.
 if isSat and isJunk is false, the result will be corrupted, but we test it at the beginning, because it should return []
 */
function getBySatellite(satType, isSat, isJunk) 
{
    return satType == isSat || satType == !isJunk;
}
  
/*
Return true, if the launching year is smaller then the input year
*/
function getByYear(satYear, year)
{
    return satYear <= year;
}

/*
Return true, if the satellite is from the given orbit(s), otherwise false
*/
function getByOrbit(satOrbit, orbit)
{
    let leo = orbit.LEO == true && satOrbit == 'LEO';
    let meo = orbit.MEO == true && satOrbit == 'MEO';
    let gso = orbit.GSO == true && satOrbit == 'GSO';

    return leo || meo || gso;
}

/*
Return true, if the optTier corrensponds for the optimalization pattern
*/
function optimazeData(satOrbit,satOptTier, filterOne, filterTwo)
{
    return satOrbit == "LEO" ? satOptTier == filterOne : 
    (satOptTier == filterOne || satOptTier == filterTwo) ;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

