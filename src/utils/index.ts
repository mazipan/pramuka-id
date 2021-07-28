const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  let time = t
  time /= d / 2
  if (time < 1) {
    return (c / 2) * time * time + b
  }
  time -= 1
  return (-c / 2) * (time * (time - 2) - 1) + b
}

export const scrollTo = (element: string, duration = 1000) => {
  const to = document.getElementById(element)?.offsetTop
  const start = window.scrollY
  const change = (to || 0) - start
  let currentTime = 0
  const increment = 20

  const animateScroll = () => {
    currentTime += increment
    const val = easeInOutQuad(currentTime, start, change, duration)
    window.scrollTo(0, val)
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }

  animateScroll()
}

export interface ReportCoreWebVitalsParams {
  id: string;
  name: string;
  label: string;
  value: number;
}

export function reportCoreWebVitals({ id, name, label, value }: ReportCoreWebVitalsParams) {
  // eslint-disable-next-line no-undef
  // @ts-ignore
  window.ga('send', 'event', {
    eventCategory: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true // avoids affecting bounce rate.
  })
}

