var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

const appData = require('./data.json')
const intro = appData.intro
const info = appData.info
const skill = appData.skill
const experience = appData.experience
const works = appData.works
const contact = appData.contact
const footer = appData.footer
const apiRoutes = express.Router()
app.use('/api', apiRoutes)

app.get('/api/intro', (req, res) => {
  res.json({
    errno: 0,
    data: intro
  })
})
app.get('/api/info', (req, res) => {
  res.json({
    errno: 0,
    data: info
  })
})
app.get('/api/skill', (req, res) => {
  res.json({
    errno: 0,
    data: skill
  })
})
app.get('/api/experience', (req, res) => {
  res.json({
    errno: 0,
    data: experience
  })
})
app.get('/api/works', (req, res) => {
  res.json({
    errno: 0,
    data: works
  })
})
app.get('/api/contact', (req, res) => {
  res.json({
    errno: 0,
    data: contact
  })
})
app.get('/api', (req, res) => {
  res.json({
    errno: 0,
    data: footer
  })
})

app.use(express.static('./dist'));

module.export = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n');
})

