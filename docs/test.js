console.log('hello world')
var test = document.getElementById('test');
var log = document.getElementById('log')
var log2 = document.getElementById('log2')
var count = 0;
test.addEventListener('click', function() {
  log.textContent = 'clicked' + count
  count++;
})

test.addEventListener('touchend', function() {
  log2.textContent = 'touchend' + count
  count++;
})

li = document.createElement('li')
li.textContent = 'screen.innerWidth ' + screen.innerWidth;
log3.appendChild(li);
li = document.createElement('li')
li.textContent = 'screen.innerHeight ' + screen.innerHeight;
log3.appendChild(li);
