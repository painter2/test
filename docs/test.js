console.log('hello world')
var test = document.getElementById('test');
var log = document.getElementById('log')
var log2 = document.getElementById('log2')
var count = 0;
var touchCount = 0;
test.addEventListener('click', function() {
  count++;
  log.textContent = 'clicked' + count;
})

document.addEventListener('touchend', function() {
  touchCount++;
  log2.textContent = 'touchend' + touchCount;
})

window.addEventListener('resize', function() {
  log2.textContent = 'resize ' + window.innerWidth + ' x ' + window.innerHeight;
})

function addInfo(info) {
  li = document.createElement('li')
  li.textContent = info;
  log3.appendChild(li);

}
addInfo('window.innerWidth ' + window.innerWidth);
addInfo('window.innerHeight ' + window.innerHeight);
addInfo('screen.width ' + screen.width);
addInfo('screen.height ' + screen.height);
