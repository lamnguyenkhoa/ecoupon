# API

## User

Schema:

```javascript
{
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  ownedCoupon: { type: [ObjectID] },
}
```

### GET

`/user/getall`: return all users data.

`/user/:id`: return a specific user data. `:id` is ObjectID in MongoDB.

### POST

`/user`: Create an user object and save to database.

### DELETE

`/user/:id`: Delete an user object from database.

### PUT

`/user/:id`: Update an user object to database.
