window.addEventListener('load', function () {
  var el = document.getElementById('problem-statement');
  document.getElementById('problem-statement').innerHTML = mdmj(document.getElementById('original-problem-statement').value, 0);
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,el]);
});
