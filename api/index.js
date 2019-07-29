const express = require("express")
const app = express()
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post("/get_video", (req, res) => {
  var video_url;
  var youtubedl = require('youtube-dl');
  var url = req.body.videoLink;
  var options = ['--username=user', '--password=hunter2'];
  youtubedl.getInfo(url, options, function(err, info) {
    if (err) {
      res.status(200).json({
        error : 'Video Məlumatları tapılmadı'
      })
    }else{
      var filesize = require('filesize')
      var size = filesize(info.filesize, {base: 10});
      res.status(200).json({
        id: info.id,
        title : info.title,
        url : info.url,
        thumbnail : info.thumbnail,
        duration : info.duration,
        type : info.ext,
        size : size
      })
    }
  });
})


module.exports = {
  path: "/api",
  handler: app
}
