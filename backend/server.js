require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const passportSetup = require('./config/passport-setup'); // we dont have to use it, but have to include it
const cookieSession = require('cookie-session');

const userRoute = require('./routes/user');
const couponRoute = require('./routes/coupon');
const challengeRoute = require('./routes/challenge');
const authRoute = require('./routes/authenticate');

app.use(function (req, res, next) {
  console.log('handling request for: ' + req.url);
  next();
});

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // in millisecond
    keys: ['cookie-secret-key-that-im-not-bother-to-hide'],
  })
);

app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const dbURI =
  'mongodb+srv://admin:admin@cluster0.6sjzi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(userRoute);
app.use(couponRoute);
app.use(challengeRoute);
app.use('/auth', authRoute);

let server = app.listen(port, function () {
  console.log(`⚡Server is running on ${host}:${port}`);
});

app.get('/', (req, res) => {
  console.log(`⚡Server is running on ${host}:${port}`);
});

initMongooseConnection(() => {
  app.emit('ready');
});

/**
 * Use this function to close everything.
 */
function stop(callback) {
  mongoose.disconnect();
  mongoose.connection.once('close', () => {
    server.close(callback);
  });
}

/**
 * Initialize connection to mongoDB and setup on-event emitters.
 * Callback is usually used in test for done()
 * @param {function} callback
 */
function initMongooseConnection(callback) {
  var options = {
    keepAlive: true,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connection.on('connecting', () => {
    console.log('Connecting. State: ' + mongoose.connection.readyState); // state 2
  });
  mongoose.connection.on('connected', () => {
    console.log('Connected. State: ' + mongoose.connection.readyState); // state 1
  });
  mongoose.connection.on('disconnecting', () => {
    console.log('Disconnecting. State: ' + mongoose.connection.readyState); // state 3
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected. State: ' + mongoose.connection.readyState); // state 0
  });

  // Actual connection part
  mongoose.connect(dbURI, options);
  var db = mongoose.connection;
  db.on('error', (err) => {
    console.log('Failed to connect to database');
    console.log(err);
    process.exit(1);
  });

  db.once('open', () => {
    console.log('DB Name : ' + db.name);
    callback();
  });
}

module.exports = { app, stop, initMongooseConnection };
