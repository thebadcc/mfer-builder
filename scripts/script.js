window.onload = function() {
  import mergeImages from 'merge-images';
mergeImages(['/background/blue.png', '/type/ape mfer.png'])
  .then(b64 => document.querySelector('img').src = b64);
};

