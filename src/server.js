import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
var cors = require('cors')

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

var whitelist = ['https://api-1945.herokuapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
        .get('/', cors(corsOptionsDelegate), function (req, res, next) {
              res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
         })
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
