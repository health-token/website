import { forwardRef } from 'react'

const Button = forwardRef(({ href, className, text }, ref) => {
  return (
    <a href={href} ref={ref} className={className} >
      {text}
    </a>
  )
})

export default Button
