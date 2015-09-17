Session.setDefault('w', 2)
Session.setDefault('h', 100)
Session.setDefault('x', -3)
Session.setDefault('y', -40)

var count = 0
setInterval(function () {
  var step = Math.sin(count/300)
  draw(Math.abs(step) + 4)
  count++
}, 50)

function draw (step) {
  var w = Session.get('w')
  var h = Session.get('h')
  var x = Session.get('x')
  var y = Session.get('y')
  var box = document.getElementById('box')
  empty(box)
  for (var i=0; i < (360/step); i++) {
    var fill = getColour(i)
    var rot = i * step
    var shape = getRect(x, y, w, h, rot, fill)
    box.appendChild(shape)
  }
}

function getRect (x, y, w, h, rot, fill) {
  return makeSVG('rect', {
    transform: 'rotate('+rot+')',
    fill: '#' + fill,
    x: x,
    y: y,
    width: w,
    height: h
  })
}

function getColour (n) {
  var gosh = [
    'EFE61F',
    'FBD614',
    'F7A416',
    'F17A16',
    'E6471D',
    'E7302A',
    'DF0736',
    'DF0559',
    'E5177B',
    'D80681',
    'E5177B',
    'D80681',
    'BE107F',
    '881F7E',
    '5B2579',
    '3D297E',
    '193E8E',
    '1D60AE',
    '2784C9',
    '169DD7',
    '20A19D',
    '209B6C',
    '1A9D3F',
    '60B236',
    'B0CC22'
    ]
  var i = n % gosh.length
  return gosh[i]
}

function empty (node) {
  while (node.lastChild) {
    node.removeChild(node.lastChild)
  }
}

// stackoverflow yo: http://stackoverflow.com/a/3642265
function makeSVG(tag, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag)
  for (var k in attrs)
    el.setAttribute(k, attrs[k]);
  return el;
}
