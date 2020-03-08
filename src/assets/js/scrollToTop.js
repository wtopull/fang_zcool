// currentY:number 当前页面已滚动的值
// targetY:number 滚动到指定位置的值
function scroll(currentY, targetY) {
  let needScrollTop = targetY - currentY
  let _currentY = currentY
  setTimeout(() => {
    const dist = Math.ceil(needScrollTop / 10)
    _currentY += dist
    window.scrollTo(_currentY, currentY)
    if (needScrollTop > 10 || needScrollTop < -10) {
      scroll(_currentY, targetY)
    } else {
      window.scrollTo(_currentY, targetY)
    }
  }, 17)
}
export default scroll