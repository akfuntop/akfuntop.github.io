var posts=["posts/10426437.html","posts/0.html","posts/5ba099dc.html","posts/95e8bb57.html","posts/2644083d.html","posts/d0222595.html","posts/819af37b.html","posts/e4202cf5.html","posts/bb377607.html","posts/3fbf5339.html","posts/94316c9a.html","posts/10d377b0.html","posts/2cf32eff.html","posts/5be3ba1b.html","posts/2fae8298.html","posts/84de489d.html","posts/a6535b32.html","posts/3803beb9.html","posts/186c95c2.html","posts/d63c9cdd.html","posts/8d2f5524.html","posts/7fee6507.html","posts/12d51616.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };