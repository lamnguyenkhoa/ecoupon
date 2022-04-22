# API

## Table of content

- [User](#user)

- [Coupon](#coupon)

- [Challenge](#challenge)

## User

Schema

```javascript
{
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  ownedCoupon: { type: [ObjectID] },
  role: {
    type: String,
    enum: ['USER', 'COMPANY'],
    required: true,
  },
}
```

GET

`/user/getall`: return all users data.

`/user/:id`: return a specific user data. `:id` is ObjectID in MongoDB.

POST

`/user`: Create an user object and save to database.

DELETE

`/user/:id`: Delete an user object from database.

PUT

`/user/:id`: Update an user object to database.

## Coupon

Schema

```javascript
{
  title: { type: String, required: true },
  description: { type: String },
  company: { type: String, required: true },
  validBefore: { type: Date, required: true },
  remaining: { type: Number, required: true },
}
```

Time format is YYYY-MM-DD

GET

`/coupon/getall`: return all coupons data.

`/coupon/:id`: return a specific coupon data. `:id` is ObjectID in MongoDB.

POST

`/coupon`: Create a coupon object and save to database.

DELETE

`/coupon/:id`: Delete a coupon object from database.

PUT

`/coupon/:id`: Update a coupon object to database.

## Challenge

Schema

```javascript
{
  name: { type: String, required: true },
  description: { type: String },
  coupon: { type: ObjectID, required: true },
  category: {
    type: String,
    enum: ['FOOD', 'CARBON', 'MATERIAL', 'OTHER'],
    required: true,
  },
}
```

Make sure that the coupon's ObjectID exist in database.

GET

`/challenge/getall`: return all challenges data.

`/challenge/:id`: return a specific challenge data. `:id` is ObjectID in MongoDB.

POST

`/challenge`: Create a challenge object and save to database.

DELETE

`/challenge/:id`: Delete a challenge object from database.

PUT

`/challenge/:id`: Update a challenge object to database.
