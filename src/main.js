// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

// 设计宽度
var deviseW = 750
var deviseH = 10595
const scaleBox = document.getElementsByClassName('scale-box')[0]
var scale = window.innerWidth / deviseW
scaleBox.style.width = deviseW + 'px'
scaleBox.style.height = deviseH + 'px'
scaleBox.style.transform = `scale(${scale}, ${scale})`
// console.log(window.innerHeight, deviseH * scale)
scaleBox.style.transformOrigin = `0  0`
var maxHeight = scale * deviseH
document.getElementsByClassName('home')[0].style.height = maxHeight + 'px'