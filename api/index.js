const express = require("express")
const app = express()


app.post("/get_video", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://nuxt-youtube.herokuapp.com/');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
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
