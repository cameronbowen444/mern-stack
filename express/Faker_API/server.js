const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        _id: faker.datatype.uuid()
    };
    return newUser;
}

const newPerson = createUser();

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

const newEntity = createCompany();



app.get("/api", (req, res) => {
    res.send("Our express api server ");
});

app.get("/api/users/new", (req, res) => {
    res.json( newPerson);
});

app.get("/api/companies/new", (req, res) => {
    res.json( newEntity );
});

app.get("/api/user/company", (req, res) => {
    res.json({ newPerson, newEntity });
})



const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);