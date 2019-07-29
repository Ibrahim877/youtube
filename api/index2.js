const express = require("express")
const app = express()
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post("/get_video", (req, res) => {
  var video_url;
  var youtubedl = require('youtube-dl');
  var url = req.body.url;
  var options = ['--username=user', '--password=hunter2'];
  youtubedl.getInfo(url, options, function(err, info) {
    if (err) {
      res.status(200).json({
        link : 'Link yoxdu'
      })
    }else{
      res.status(200).json({
        link : info.url
      })
    }
  });
})




module.exports = {
  path: "/api",
  handler: app
}