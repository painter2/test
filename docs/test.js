console.log('hello world')
var test = document.getElementById('test');
var log = document.getElementById('log')
var count = 0;
test.addEventListener('click', function () {
  log.textContent = 'clicked' + count
  count++;
})

test.addEventListener('touchend', function () {
  log.textContent = 'touchend' + count
  count++;
})

log.appendChild('screen.innerWidth ' + screen.innerWidth);
log.appendChild('screen.innerHeight ' + screen.innerHeight);
