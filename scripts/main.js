function toggleNav() {
  var el = document.getElementById('contest-nav-menu');
  console.log(el.style.display);
  if (el.style.display === 'inline-block') el.style.display = 'none';
  else el.style.display = 'inline-block';
}
