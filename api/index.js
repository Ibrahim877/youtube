const express = require("express")
const app = express()


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
