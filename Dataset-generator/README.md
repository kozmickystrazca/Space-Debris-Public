<!-- 
Deutsche Telekom IT Solutions Slovakia 2022
Created by: Ádám Tamáš
 -->
# Satellite data generator

This node.js program was created to create a specific satellite dataset (and it's simplified version) in **JSON** by merging the TLE data from text document with the **NORAD Satellite Catalog** in CSV format.

## Installation

 - To install all the dependencies, use the **`npm install`** command in the **Dataset-generator** directory.
 - To run this project, use the **`node .\dataset_generator.js`** command in the **Dataset-generator** directory, or just change the filepath.

 ## Sources

 To create the new data, the program use two file:

 - ### `3le.txt`
    
    This file can be found in the **data** directory, so the absoluty path (in Windows) should look like that: **`{your\path}\Dataset-generator\data\3le.txt`**. The file should contains TLE data about satellites like in this example:

    ```txt
    0 VANGUARD 1
    1 00005U 58002B   22237.43319354  .00000174  00000-0  22372-3 0  9999
    2 00005  34.2496 286.8512 1847288 347.9860   8.1844 10.84997181292031
    0 VANGUARD 2
    1 00011U 59001A   22237.55487365  .00000010  00000-0  99351-5 0  9999
    2 00011  32.8673 294.3638 1466394  83.9119 292.6020 11.86163350369869
    0 VANGUARD R/B
    1 00012U 59001B   22237.84584548  .00000000  00000-0 -11511-4 0  9994
    2 00012  32.9081  73.4198 1665764 319.7018  29.1053 11.44691889371578
    ...
    ```
    >We will use the NORAD ID to identificate the given object, and the name for them will be given later from the catalog, so it's not problem, if the name not start with ***0*** just like in the nex example.

    - Other good example:
    ```txt
    CALSPHERE 1             
    1 00900U 64063C   22284.19060669  .00000847  00000+0  89142-3 0  9998
    2 00900  90.1823  43.0412 0027306  38.1063  33.4693 13.73920743886556
    CALSPHERE 2             
    1 00902U 64063E   22283.79167394  .00000048  00000+0  59466-4 0  9998
    2 00902  90.1964  46.1897 0018817 167.3149 351.5124 13.52724146674365
    LCS 1                   
    1 01361U 65034C   22283.83898761  .00000024  00000+0  19820-2 0  9993
    2 01361  32.1375 131.3264 0012410 286.1841  73.7290  9.89302178 76651
    ...
    ```
    >In the reposirtory, you can find the list of active satellites, from the webpage of Celestrak as an example.

 - ### `satcat.csv`

    This file can be found in the **data** directory, so the absoluty path (in Windows) should look like that: **`{your\path}\Dataset-generator\data\satcat.csv`**. The file should contains the NORAD Satellite Catalog in CSV format, like that:

    ```csv
    OBJECT_NAME,OBJECT_ID,NORAD_CAT_ID,OBJECT_TYPE,OPS_STATUS_CODE,OWNER,LAUNCH_DATE,LAUNCH_SITE,DECAY_DATE,PERIOD,INCLINATION,APOGEE,PERIGEE,RCS,DATA_STATUS_CODE,ORBIT_CENTER,ORBIT_TYPE
    SL-1 R/B,1957-001A,1,R/B,D,CIS,1957-10-04,TYMSC,1957-12-01,96.19,65.10,938,214,20.4200,,EA,IMP
    SPUTNIK 1,1957-001B,2,PAY,D,CIS,1957-10-04,TYMSC,1958-01-03,96.10,65.00,1080,64,,,EA,IMP
    SPUTNIK 2,1957-002A,3,PAY,D,CIS,1957-11-03,TYMSC,1958-04-14,103.74,65.33,1659,211,0.0800,,EA,IMP
    ...
    ```
 > If you want to change the source, just change these files, but do not change the name of them.

 ## Output files

 After you successfully ran the program, you will got 2 dataset:

  - ### `main_satellite_data.json`

    This file will be found in the **data** directory, so the absoluty path (in Windows) should look like that: **`{your\path}\Dataset-generator\data\main_satellite_data.json`**. The file contains the merged information from the two sourcefile. The json object frame looks like that (example):
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
            "line2":"2 00005  34.2496 286.8512 1847288 347.9860   8.1844 10.84997181292031"
        }
    }
    ```

    > Important: The new data set contains only those satellites that are included in both source files.  
    > Satellite data is tested, so if an object contains incorrect data it will be skipped.

 - ### `simplified_satellite_data.json`
    This file will be found in the **data** directory, so the absoluty path (in Windows) should look like that: **`{your\path}\Dataset-generator\data\simplified_satellite_data.json`**. The file contains the simplified version of the [main_satellite_dataset.json](#mainsatellitedatajson). The json object frame looks like that (example):
    ```json
    {
        "name":"VANGUARD 1",
        "id":5,
        "satellite":true,
        "year":1958,
        "orbit":"MEO",
        "optTier":1,
        "line1":"1 00005U 58002B   22237.43319354  .00000174  00000-0  22372-3 0  9999",
        "line2":"2 00005  34.2496 286.8512 1847288 347.9860   8.1844 10.84997181292031"
    }
    ```
    > Because most of the computers and devices have limited resources, we added an extra optimalization option in the menu. When this  option is checked, we reduce the number of objects by 75% on the **LEO** (*Low Earth Orbit*) and by 50% on everywhere else. Since we want to keep the distribution even and not have random empty areas during the animation, we numbered the objects from one to four (***optTier***). This way, we can easily reduce the number of objects by 25-50-75 percent, wWithout the fear of destabilising the balance.
