function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);

//Install express server
const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ecommerce-app/vlaunch'));

app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/LavisDecor-Web/vlaunch/index.html'));
res.sendFile('index.html', {root: 'dist/ecommerce-app/vlaunch/'})
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);