console.log('hello world')
var test = document.getElementById('test');
var log = document.getElementById('log')
var log2 = document.getElementById('log2')
var count = 0;
test.addEventListener('click', function() {
  log.textContent = 'clicked' + count
  count++;
})

document.addEventListener('touchend', function() {
  log2.textContent = 'touchend' + count
  count++;
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
