import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
var cors = require('cors')

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

var whitelist = ['https://api-1945.herokyapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
        .get('/items/', cors(corsOptions), function (req, res, next) {
              res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
         })
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
