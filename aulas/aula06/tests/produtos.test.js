const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

describe('Teste da API /produtos', function() {

    test('POST / deve retornar 201 com Objeto JSON',async function() {
        const novo = {nome: "uva", preco: 15.00}
        const response = await request.post("/produtos").send(novo);
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json');
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('nome', novo.nome);
        expect(response.body).toHaveProperty('preco', novo.preco);  

    });
  
    test('POST / deve retornar 422 com Objeto JSON', function() {
  
    });

  test('GET / deve retornar 200 com Array JSON',async function() {
    const response = await request.get ('/produtos');
    expect(response.status).toBe(200);
    expect (response.type).toBe('application/json');
    expect(Array.isArray(response.body)).toBe(true);

  });

  test('GET /1 deve retornar 200 com Objeto JSON', function() {

  });

  test('GET /100 deve retornar 404 com Objeto JSON', function() {

  });

  test('PUT /1 deve retornar 200 com Objeto JSON', function() {

  });

  test('PUT /1 deve retornar 422 com Objeto JSON', function() {

  });

  test('PUT /100 deve retornar 404 com Objeto JSON', function() {

  });

  test('DELETE /1 deve retornar 204 sem corpo', function() {

  });

  test('DELETE /100 deve retornar 404 com Objeto JSON', function() {

  });
});