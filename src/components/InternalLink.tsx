import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { useNavigation } from '../context/useNavigation'

interface InternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
}

export default function InternalLink({ to, onClick, ...rest }: InternalLinkProps) {
  const { navigate } = useNavigation()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }
    event.preventDefault()
    navigate(to)
    onClick?.(event)
  }

  return <a href={to} onClick={handleClick} {...rest} />
}
