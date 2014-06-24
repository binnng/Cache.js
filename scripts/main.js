window.onload = function() {
  var DOC = document,
    ul = DOC.querySelector('ul'),
    li = DOC.createElement('li');

  li.innerText = 'have script!!';

  ul.appendChild(li);
};