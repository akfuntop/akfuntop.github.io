var posts=["2024/02/23/本站说明及常见问题.html","2024/02/24/7day-与你共度的七日间-pc-krkr.html","2024/02/24/兽耳娘大作战-animal☆panic-pc汉化全cg.html","2024/02/23/atri-my-dear-moments-pc-krkr官中版.html","2024/02/24/巧克甜恋1-pc汉化版-全cg存档.html","2024/02/25/巧克甜恋2-pc官中.html","2024/02/29/flip＊flop-〜innocence-overclock〜-pc-tyranor汉化版-全cg存档.html","2024/02/29/flip＊flop-～rambling-overrun～-pc-tyranor汉化版-全cg存档.html","2024/02/22/ginka-pc-krkr-官中版-全cg存档.html","2024/03/06/恋之叶-共享恋爱之家-pc-tyranor版-汉化-全cg存档.html","2024/02/25/qualia-～约定的轨迹～-官中-pc-tyranor版.html","2024/02/28/星恋-twinkle-pc-krkr-完整汉化版-全cg存档.html","2024/02/28/异想魅惑-pc汉化-全cg存档.html","2024/02/27/对魔忍阿莎姬zero-対魔忍アサギzero-pc.html","2024/02/27/对魔忍阿莎姬-対魔忍アサギ-1-2-3-外传-pc-krkr-全cg存档.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };