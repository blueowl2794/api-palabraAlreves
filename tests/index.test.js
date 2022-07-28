const request = require('supertest')
const { app } = require('../index.js')
let chai = require('chai')

chai.should();


describe("/GET /iecho?text=string", () => {
    it("Responde con un json con el string al reves", (done) => {
        request(app)
            .get("/iecho?text=string")
            .set("Accept", "application/json")
            .expect("content-Type",/json/)
            .expect({"text":"gnirts", "palindrome": false})
            .expect(200, done)
    });

    
    it("Responde con un 400 si no hay string", (done) => {
        request(app)
            .get("/iecho?text=")
            .set("Accept", "application/json")
            .expect("content-Type",/json/)
            .expect(400, done)
            .expect({"error":"no text"})
            
    });

   

    // it("recibe un array", async ()=>{
    //     const response = await (await request(app).get("/iecho?text='string'")).send()
    //     expect(response.query).to.equal("string")
    // })
});

describe("/GET /iecho?text=Ana", () => {
    it("Responde con un json y palindromo en true", (done) => {
        request(app)
            .get("/iecho?text=Ana")
            // .set("Accept", "application/json")
            .expect("content-Type",/json/)
            .expect({"text":"ana", "palindrome": true})
            .expect(200, done)
    });
    
})
