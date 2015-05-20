
Signup = new Mongo.Collection("signup");

var Schemas = {};

Schemas.Signup= new SimpleSchema({
    /*name: {
        type: String,
        label: "first_name",
        max: 200

        lla
    },*/
    surname: {
        type: String,
        label: "last_name"
    },
    email: {
        type: String,
        label: "email",
        min: 0
    }/*,
    password: {
        type: String,
        label: "password",
        optional: true
    },
    organisation: {
        type: String,
        label: "organisation",
        optional: true,
        max: 1000
    },
    phone: {
        type: Number,
        label: "phone",
        optional: true,
        max: 1000
    }*/
});

