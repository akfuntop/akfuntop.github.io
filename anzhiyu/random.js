var posts=["2024/02/23/本站说明及常见问题.html","2024/02/22/ginka-pc-krkr-官中版-全cg存档.html","2024/02/23/atri-my-dear-moments-pc-krkr官中版.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };