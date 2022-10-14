//Deutsche Telekom IT Solutions Slovakia 2022
//Created by: Ádám Tamáš

const chai = require('chai');
const asserttype = require('chai-asserttype');
chai.use(asserttype);
const expect = chai.expect;

const data = require("../data/all_together_new.json");
const simplified_data = require("../data/simplified_data_new.json");


describe("Dataset tests", function() {
    describe("Simplified dataset test", function() {
        it("The elements contain the required keys", function() {
            simplified_data.forEach(element => {
                expect(element).to.have.keys(["name","id","satellite","year","orbit","optTier","line1","line2"]);
            });
        });

        it("The keys contains some real data", function() {
            simplified_data.forEach(element => {
                Object.keys(element).every( keyElement => {
                    expect(keyElement).to.not.equal("");
                    expect(keyElement).to.not.equal(null);
                });
                
            });
        });

        it("Name key's value should be a string", function() {
            simplified_data.forEach(element => {
                expect(element.name).to.be.string();
            });
        });

        it("ID key's value should be a number", function() {
            simplified_data.forEach(element => {
                expect(element.id).to.be.number();
            });
        });

        it("Satellite key's value should be a boolean", function() {
            simplified_data.forEach(element => {
                expect(element.satellite).to.be.boolean();
            });
        });

        it("Year key's value should be a number", function() {
            simplified_data.forEach(element => {
                expect(element.year).to.be.number();
            });
        });

        it("Orbit key's value should be a string", function() {
            simplified_data.forEach(element => {
                expect(element.orbit).to.be.string();
            });
        });

        it("Line1 key's value should be a string", function() {
            simplified_data.forEach(element => {
                expect(element.line1).to.be.string();
            });
        });

        it("Line2 key's value should be a string", function() {
            simplified_data.forEach(element => {
                expect(element.line2).to.be.string();
            });
        });
        it("OptTier is generated as expected", function() {
            simplified_data.forEach( (element) => {
                expect(element.optTier).to.be.number();
                expect(element.optTier).to.be.least(1);
                expect(element.optTier).to.be.most(4);
            });
        });
    });

    describe("Main dataset test", function() {
        it("The elements contain the required main keys", function() {
            data.forEach(element => {
                expect(element).to.have.keys(["info","tle"]);
            });
        });

        it("The main keys contain the required key properties", function() {
            this.timeout(5000);
            data.forEach(element => {
                    expect(element.info).to.include.key(["OBJECT_NAME","OBJECT_ID","NORAD_CAT_ID", "OBJECT_TYPE", "OPS_STATUS_CODE",
                    "OWNER","LAUNCH_DATE","LAUNCH_SITE", "DECAY_DATE", "ORBIT_ALTITUDE_TYPE"]);
                    expect(element.tle).to.have.keys(["line1","line2"]);
            });
        });

        it("The required keys contains some real data", function() {
            this.timeout(5000);
            data.forEach(element => {
                let info = element.info;
                Object.keys(info).every( keyElement => {
                    expect(keyElement).to.not.equal(null);
                });

                expect(info["OBJECT_NAME"]).to.not.equal("");
                expect(info["OBJECT_ID"]).to.not.equal("");
                expect(info["NORAD_CAT_ID"]).to.not.equal("");
                expect(info["ORBIT_ALTITUDE_TYPE"]).to.not.equal("");

                Object.keys(element.tle).every( keyElement => {
                    expect(keyElement).to.not.equal("");
                    expect(keyElement).to.not.equal(null);
                });
                
            });
        });

        it("OBJECT_NAME key's value should be a string", function() {
            data.forEach(element => {
                expect(element.info["OBJECT_NAME"]).to.be.string();
            });
        });

        it("OBJECT_ID key's value should be a string", function() {
            data.forEach(element => {
                expect(element.info["OBJECT_ID"]).to.be.string();
            });
        });

        it("NORAD_CAT_ID key's value should be a number", function() {
            data.forEach(element => {
                expect(element.info["NORAD_CAT_ID"]).to.be.number();
            });
        });

        it("ORBIT_ALTITUDE_TYPE key's value should be a string", function() {
            data.forEach(element => {
                expect(element.info["ORBIT_ALTITUDE_TYPE"]).to.be.string();
            });
        });

        it("Tle line's value should be a string", function() {
            data.forEach(element => {
                expect(element.tle["line1"]).to.be.string();
                expect(element.tle["line2"]).to.be.string();
            });
        });
    });

    describe("Datasets together", function() {

        it("Both dataset should have the same length - HEO", function() {
            let datacup = data.filter(
                function(catalog){ return catalog.info.ORBIT_ALTITUDE_TYPE != "HEO" }
            );
            expect(datacup.length).to.equal(simplified_data.length);
        });
        
        it("Every ID should appear only once", function() {
            this.timeout(5000);
            simplified_data.forEach(element => {
                let data_element = getByNoradID(element.id, data);
                expect(data_element.length).to.equal(1);
            });
        });

        it("Elements should have the same id/name pair", function() {
            this.timeout(5000);
            simplified_data.forEach(element => {
                let data_element = getByNoradID(element.id, data);
                expect(data_element[0].info["OBJECT_NAME"]).to.equal(element.name);
            });
        });

      
        it("Elements should have the same tle data", function() {
            this.timeout(5000);
            simplified_data.forEach(element => {
                let data_element = getByNoradID(element.id, data);
                expect(data_element[0].tle["line1"]).to.equal(element.line1);
                expect(data_element[0].tle["line2"]).to.equal(element.line2);
            });
        });
        
    });
});

function getByNoradID(id, dataset) {    //Return every object with the given ID. Most of the time the list contain only 1 or 0 element
    return dataset.filter(
        function(catalog){ return catalog.info.NORAD_CAT_ID == id }
    );
  }