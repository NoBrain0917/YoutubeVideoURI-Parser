const request = require("sync-request");

getYoutubeVideoURI = (url) => {
  let urlSplit = url.split("/");
  let urlCode = urlSplit[urlSplit.length-1];
  let res = request("GET","https://www.youtube.com/get_video_info?video_id="+urlCode);
  let videoJson = JSON.parse(decodeURIComponent(unescape(String(res.body).replace(/\\/g,"%"))).split('formats":[')[1].split("}")[0]+"}");
  return videoJson.url;
}
