import { createElement } from 'react'
interface TextProps {
  tag: string
  text: string
  className: string
}

function Text({ tag, text, className, ...other }: TextProps) {
  return createElement(
    `${tag}`,
    {
      className: `${className || ''}`,
      ...other
    },
    text
  )
}

export default Text
