(function (global, doc) {
  'use strict'
  function r (s) {
    let cliwidth = document.clientWidth
    let pattern = !navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
    let baseVal = 1024
    if (pattern && cliwidth > baseVal) {
      style.innerHTML = 'html{font-size:64px !important;background:rgb(245,245,245);}body{max-width:640px;margin-right:auto!important;margin-left:auto!important;background:rgba(251,251,251);}'
    } else {
      style.innerHTML = ''
    }
  }

  let document = doc.documentElement
  let style = doc.createElement('style')
  document.firstElementChild.appendChild(style)
  global.addEventListener('resize', function () {
    r()
  }, false)
  global.addEventListener('pageshow', function (f) {
    f.persisted && r()
  }, false)
  r()
})(window, document)
