//Deutsche Telekom IT Solutions Slovakia 2022
//Created by: Ádám Tamáš

const chai = require('chai');
const expect = chai.expect;
const request = require("supertest")("http://localhost:3001");
const main_data = require("../data/all_together_new.json");
const simplified_data = require("../data/simplified_data_new.json");

describe("Server test", function() {
    it("Get /(ping the server))", async function() {
        const response = await request.get("/");
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal("Hello from server! Vesmirny strazca");
    });

    it("Get /data", async function() {
        this.timeout(5000);
        const response = await request.get("/data");
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(main_data.length);
    });

    it("get /data/animation", async function() {
        this.timeout(5000);
        const response = await request.get("/data/animation");
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(simplified_data.length);
    });

    it("get /data/id/:id", async function() {
        this.timeout(5000);
        for(let i=0; i<=100; i++)
        {
        let randNum = getRndInteger(0, main_data.length);
        let testDataCup = main_data[randNum].info;
        const response = await request.get("/data/id/"+testDataCup["NORAD_CAT_ID"]);
        expect(response.status).to.equal(200);
        expect(response.body.info["OBJECT_NAME"]).to.equal(testDataCup["OBJECT_NAME"]);
        expect(response.body.info["NORAD_CAT_ID"]).to.equal(testDataCup["NORAD_CAT_ID"]);
        }
        
    });

    describe("get /data/year/:year", function() {
        it("get /data/year/:year from 1956 to 1985", async function() {
            this.timeout(10000);
            for(let i=1956; i<1985; i++)
            {
            const response = await request.get("/data/year/"+i);
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                let year = new Date(element.info["LAUNCH_DATE"]).getFullYear();
                expect(year).to.be.at.most(i);
            });
            }
        });
    
        it("get /data/year/:year from 1985 to 2000", async function() {
            this.timeout(10000);
            for(let i=1985; i<2000; i++)
            {
            const response = await request.get("/data/year/"+i);
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                let year = new Date(element.info["LAUNCH_DATE"]).getFullYear();
                expect(year).to.be.at.most(i);
            });
            }
        });
    
        it("get /data/year/:year from 2000 to 2010", async function() {
            this.timeout(10000);
            for(let i=2000; i<2010; i++)
            {
            const response = await request.get("/data/year/"+i);
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                let year = new Date(element.info["LAUNCH_DATE"]).getFullYear();
                expect(year).to.be.at.most(i);
            });
            }
        });
    
        it("get /data/year/:year from 2010 to 2015", async function() {
            this.timeout(10000);
            for(let i=2010; i<2015; i++)
            {
            const response = await request.get("/data/year/"+i);
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                let year = new Date(element.info["LAUNCH_DATE"]).getFullYear();
                expect(year).to.be.at.most(i);
            });
            }
        });
    
        it("get /data/year/:year from 2015 to 2022", async function() {
            this.timeout(10000);
            for(let i=2015; i<=2022; i++)
            {
            const response = await request.get("/data/year/"+i);
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                let year = new Date(element.info["LAUNCH_DATE"]).getFullYear();
                expect(year).to.be.at.most(i);
            });
            }
        });
    });

    describe("/data/type/:type", function() {
        it("get /data/type/PAY", async function() {
            this.timeout(10000);
            const response = await request.get("/data/type/PAY");
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                expect(element.info["OBJECT_TYPE"]).to.equal("PAY");
            });
        });

        it("get /data/type/DEB", async function() {
            this.timeout(10000);
            const response = await request.get("/data/type/DEB");
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                expect(element.info["OBJECT_TYPE"]).to.equal("DEB");
            });
        });

        it("get /data/type/RB", async function() {
            this.timeout(10000);
            const response = await request.get("/data/type/RB");
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                expect(element.info["OBJECT_TYPE"]).to.equal("R/B");
            });
        });
    });

    describe("/data/status/:status", function() {
        it("get /data/status/-", async function() {
            this.timeout(10000);
            const response = await request.get("/data/status/-");
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                expect(element.info["OPS_STATUS_CODE"]).to.equal("-");
            });
        });

        it("get /data/status/P", async function() {
            this.timeout(10000);
            const response = await request.get("/data/status/P");
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                expect(element.info["OPS_STATUS_CODE"]).to.equal("P");
            });
        });

        it("get /data/status/B", async function() {
            this.timeout(10000);
            const response = await request.get("/data/status/B");
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                expect(element.info["OPS_STATUS_CODE"]).to.equal("B");
            });
        });

        it("get /data/status/S", async function() {
            this.timeout(10000);
            const response = await request.get("/data/status/S");
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                expect(element.info["OPS_STATUS_CODE"]).to.equal("S");
            });
        });

        it("get /data/status/X", async function() {
            this.timeout(10000);
            const response = await request.get("/data/status/X");
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                expect(element.info["OPS_STATUS_CODE"]).to.equal("X");
            });
        });

        it("get /data/status/D", async function() {
            this.timeout(10000);
            const response = await request.get("/data/status/D");
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                expect(element.info["OPS_STATUS_CODE"]).to.equal("D");
            });
        });

        it("get /data/status/%2B", async function() {
            this.timeout(10000);
            const response = await request.get("/data/status/%2B");
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                expect(element.info["OPS_STATUS_CODE"]).to.equal("+");
            });
        });

        it("get /data/status/UNK", async function() {
            this.timeout(10000);
            const response = await request.get("/data/status/UNK");
            expect(response.status).to.equal(200);
            response.body.forEach(element => {
                expect(element.info["OPS_STATUS_CODE"]).to.equal("?");
            });
        });
    });
    
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }