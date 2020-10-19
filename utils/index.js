Math.easeInOutQuad = (t, b, c, d) => {
  let time = t
  time /= d / 2
  if (time < 1) {
    return (c / 2) * time * time + b
  }
  time -= 1
  return (-c / 2) * (time * (time - 2) - 1) + b
}

export const scrollTo = (element, duration = 1000) => {
  const to = document.getElementById(element).offsetTop
  const start = window.scrollY
  const change = to - start
  let currentTime = 0
  const increment = 20

  const animateScroll = () => {
    currentTime += increment
    const val = Math.easeInOutQuad(currentTime, start, change, duration)
    window.scrollTo(0, val)
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }

  animateScroll()
}
