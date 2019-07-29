const express = require("express")
const app = express()
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://nuxt-youtube.herokuapp.com');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
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
app.post("/get_mp3", (req, res) => {
  var video_url;
  var youtubedl = require('youtube-dl');
  var ytdl = require('ytdl');
  var url = req.body.url;
  var options = ['--username=user', '--password=hunter2'];
  youtubedl.getInfo(url, options, function(err, info) {
    if (err) {
      res.status(200).json({
        link : 'Link yoxdu'
      })
    }else{

      ytdl.exec(url, ['-x', '--audio-format', 'mp3'], {}, function(err, output) {
        if(err){
          res.status(200).json({
            error : err
          })
        }else{
          res.status(200).json({
            link : output.join('\n')
          })
        }
      });
    }
  });

})



module.exports = {
  path: "/api",
  handler: app
}
