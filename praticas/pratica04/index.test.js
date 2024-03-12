const supertest = require('supertest');
const app = require("./index");

const request =  supertest(app);

test ("Deve retornar 200 no GET", async function(){
    const response = await request.get("/");
    expect (response.status).toBe(200);
})

test ("Deve retornar 201 no post", async function(){
    const response = await request.post("/");
    expect (response. status).toBe(201);
})

test ("Deve retornar 3300 no Listen", async function(){
    const response = await request.listen("/");
    expect (response.status).toBe(3000);
})
