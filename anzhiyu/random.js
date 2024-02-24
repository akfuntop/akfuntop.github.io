var posts=["2024/02/23/本站说明及常见问题.html","2024/02/24/galgame-7day-与你共度的七日间-pc-krkr.html","2024/02/24/兽耳娘大作战-animal☆panic-pc汉化全cg.html","2024/02/23/atri-my-dear-moments-pc-krkr官中版.html","2024/02/22/ginka-pc-krkr-官中版-全cg存档.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };