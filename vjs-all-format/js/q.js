var vgsPlayer, poster;
vgsPlayer = videojs('vid1');
vgsPlayer.qualityMenu();
vgsPlayer.poster('https://umroh.com/blog/wp-content/uploads/2019/10/alasan-islam-menyuruh-wanita-berkerudung.jpg');
function vsgLoadVideo(vidURL, poster) {
var type = getType(vidURL);
console.log(type);
if (getId(vidURL))
poster = "" + getId(vidURL) + "";
vgsPlayer.src({
"src": vidURL,
"type": type
});
vgsPlayer.httpSourceSelector();
if (poster)
vgsPlayer.poster(poster);
else
vgsPlayer.poster("https://i.pinimg.com/564x/15/28/54/1528549392a6538641e0cd9b073ae9ce.jpg");
vgsPlayer.play();
return false;}