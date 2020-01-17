import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		//sapper.middleware()
	        sapper.middleware({
        	    session: (req, res) => ({
                	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	        })
        })

	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
