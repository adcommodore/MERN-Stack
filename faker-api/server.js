const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => ({
    password: faker.password(),
    email: faker.email(),
    phoneNumber: faker.phoneNumber(),
    lastName: faker.lastName(),
    firstName: faker.firstName(),
    id: faker.uuid(),
});

const createCompany = () => ({
    id: faker.uuid(),
    name: faker.name(),
    address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
});

app.get("/api/users/new", (req, res) => {
    const newUser = generateUserObj();
    res.json(newUser);
  });
  
  app.get("/api/user/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
  });
  
  app.get("/ap/company/new", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const responseObject = {
      user: newUser,
      company: newCompany,
    };
    res.json(responseObject);
  });
  
  app.listen(port, () => console.log(`server running on port ${port}`));
    