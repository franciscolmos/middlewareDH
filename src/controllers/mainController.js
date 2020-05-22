const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
	let filePath = path.join(__dirname, `/../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(filePath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res, next) => {
		switch (req.url) {
			case '/':
				const file = readHTML('index');
				res.send(file);

			case '/services':

				res.send(readHTML('services'));

			case '/services/design':
				res.send(readHTML('design'));

			case '/admin':
				res.send(readHTML('admin'));

			default:
				res.send(readHTML('ERROR'))
		}
	},
	welcome: (req,res,next) =>{
		res.render(('admin'),{user: req.nombreAdmin})
	}
}



module.exports = controller;
