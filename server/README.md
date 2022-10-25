<!-- 
Deutsche Telekom IT Solutions Slovakia 2022
Created by: Ádám Tamáš
 -->
# Satellite API

This RESTful API was created to enable for developers to fetch usefull information about satellites and other sapce debris. 

> Reminder: If you will fetch some data from our server, you have to await it, because fetching data from an API is **async**.

## Installation and first run

If You pulled successfully this git project, you can start it by using a package manager tool. We recommend to use NPM or Yarn. Before the first run, you should  install the dependences (we will use NPM):
 - Open a terminal
 - Go the directory of this server
 - Run `npm install`
 - Run `npm start`
 If it worked successfully, the server should run locally on port 3001. You can terminate the program by the ctrl+C keybord shortcut. Next time you can start the program by the `npm start`.
  > If you start using one pocket manager, but you decided to use another one, please delete the package-lock.json (or other .lock file), and install the dependences again with the new tool.

## Usage

You can fetch our satellite data (cca. 23 000+ satellite and debris) easily by using different route paths and queries. Our database contains 2 different dataset for different purposes, depending on your needs.

### Routes

 - #### `/`

    With this route (plus the domain and port of the service (default locally http://localhost:3001) ), you can ping the server. If the connection and request was successful the response will be the next string:

    `"Hello from server! Vesmirny strazca"`

 - #### `/data/animation`

    With this route, the server will return a json array, which contains a simplify version of our dataset. The dataset contains every useful information about the object, which enable us to animate and filter them locally. It`s size is less then half of the main dataset to optimize your application. Here is an example of the json object:
    ```json
    {
        "name":"VANGUARD 1",
        "id":5,
        "satellite":true,
        "year":1958,
        "orbit":"MEO",
        "optTier":1,
        "line1":"1 00005U 58002B   22237.43319354  .00000174  00000-0  22372-3 0  9999",
        "line2":"2 00005  34.2496 286.8512 1847288 347.9860 167.1844 10.84997181292031"
    }
    ```

 - #### `/data`

    With this route you can fatch our main dataset with all of the information about the given object in a json array. Here is an example of the json object:
    ```json
    {
        "info":{
            "OBJECT_NAME":"VANGUARD 1",
            "OBJECT_ID":"1958-002B",
            "NORAD_CAT_ID":5,
            "OBJECT_TYPE":"PAY",
            "OPS_STATUS_CODE":"",
            "OWNER":"US",
            "LAUNCH_DATE":"1958-03-17",
            "LAUNCH_SITE":"AFETR",
            "DECAY_DATE":"",
            "PERIOD":132.72,
            "INCLINATION":34.25,
            "APOGEE":3833,
            "PERIGEE":649,
            "RCS":0.122,
            "DATA_STATUS_CODE":"",
            "ORBIT_CENTER":"EA",
            "ORBIT_TYPE":"ORB",
            "ORBIT_ALTITUDE_TYPE":"MEO"
        },
        "tle":{
            "line1":"1 00005U 58002B   22237.43319354  .00000174  00000-0  22372-3 0  9999",
            "line2":"2 00005  34.2496 286.8512 1847288 347.9860 167.1844 10.84997181292031"
        }
    }
    ```

- #### `/data/id/:satid`

    With this route, you can fetch information about one object by it's NORAD satcat ID. To pass the corresponding ID, you can write it in the place of `:satid`.  
    Example (**VANGUARD 1** with NORAD_CAT_ID **5**): `/data/id/5`.  
    > The responded json data will be in format of the main dataset (see in the route: [`/data`](#data) ).  
    >This also applies to the other following routes. 

- #### `/data/year/:year`

    With this route, you can easily filter our data in the given year. To pass the year, you can write it in the place of `:year`.  
    Example (In case the year **2000**): `/data/year/2000`.  
    You can filter data in the scale of **0-2022**, but the first object in our database is from 1958 (VANGUARD 1).
    >**IMPORTANT:** This will filter every space object which where on the orbit in the given year from our database, not only the satellites, which were launched in that year. That's apply for every route which works with years (unless there is no other exception writen in the given documentation part)

- #### `/data/type/:type`

    With this route, you can easily filter our data by the type of the space object. To pass the type, you can write it in the place of `:type`. The types can be:
     - **PAY** (*Payload*)  
     - **RB** (*Rocket body* in the dataset is **R/B**, but it would corrupt the routing system)  
     - **DEB** (*Other debris*)  
     - **UNK** (*Unknown*)  

    Example (in case of type is payload): `/data/type/PAY`.  
    
- #### `/data/status/:status`

    With this route, you can easily filter our data by the **operational status** of the space object. To pass the status, you can write it in the place of `:status`. The status can be:
     - **%2B**    (*Operational*)  
     - **-**    (*Nonoperational*)  
     - **P**	(*Partially Operational/Partially fulfilling primary mission or secondary mission(s)*)  
     - **B**	(*Backup/Standby/Previously operational satellite put into reserve status*)  
     - **S**	(*Spare/New satellite awaiting full activation*)  
     - **X**	(*Extended Mission*)  
     - **D**	(*Decayed*)  
     - **UNK**	(*Unknown/in the dataset is marked as ***?***)  
    Example (in case of status Operational): `/data/status/%2B`.
    >The %2B is actually converted as **+**, but that sign has another function in the RESTful API routing.  
    >Active is any satellite with an operational status of **+(*%2B*), P, B, S, or X**.

- #### `/data/orbit/:orbit`
    With this route, you can easily filter our data by the type of orbit around Earth of the space objects. To pass the orbit type, you can write it in the place of `:orbit`. The orbits around Earth can be:
     - **LEO** (*Low Earth orbit*)  
     - **MEO** (*Mid Earth orbit*)  
     - **GSO** (*Geosynchronous/geostationar orbit*)   
    > This data was generated by us, because the NORAD satellite catalloge doesn't contain it. It is created by sorting the data based  on the apogee of the object so take it with a grain of salt:
    > - LEO - apogee intervall <0 km; 2000 km>  
    > - MEO - apogee intervall (Everything between LEO and HEO) 
    > - GSO - apogee intervall <35 586 km; 35 986 km)
    
- #### `/data/year/:year/type/:type`

    With this route, you can filter our data by year and type at the same time. That's a special route for our project, so the type is simmplified to **SAT** (satellites) and **JUNK** (everything else, especially debris, rocket bodies and other unknown objects).  
    Example (every satellite from the year 1998): `/data/year/1998/type/SAT`.  

### Queries

If the created routes are not enought for your application or you feel more convenient using query parameters instead of routes, you can do it easily with the next format:  
    **`/data?queryparam=value`**
The *queryparam* is the name of the variable and the *value* is the assigned value.  
Currently, you can use 3 different query parameter:  
 - **`year`**  
 - **`status`**  
 - **`type`**  
The assigned values are the same as for the routes: [year](#datayearyear), [type](#datatypetype) and [status](#datastatusstatus).  
You can add multiply  parameter at once by devide them with a ***&*** character, for example in case of `/data?year=1998&status=-` you will got every **nonoperational** object from the year **1998**.  
Also, you can add different value for the same parameter (excluded the year). For example, if you want to fetch every space object with the the type of **payload** and status of **P**, **B** and **S**, from the year 2017, you shouldd use the next url:  
    **`/data?type=PAY&status=P&status=B&status=S&year=2017`**

>The TLE data were fetched from space-trak.org, but we only used the subset of them and the Keplerian elements have been slightly modified that they do not carry any information applicable for further usage of the data.
>The raw NORAD satcat was fetched from celestrak.org in CSV format.


