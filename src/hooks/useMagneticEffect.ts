import { useRef, useCallback } from 'react'

export function useMagneticEffect(strength = 0.3) {
  const elementRef = useRef<HTMLElement | null>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!elementRef.current) return
      const rect = elementRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength
      elementRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    if (!elementRef.current) return
    elementRef.current.style.transform = 'translate(0px, 0px)'
    elementRef.current.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
  }, [])

  const handleMouseEnter = useCallback(() => {
    if (!elementRef.current) return
    elementRef.current.style.transition = 'transform 0.1s ease'
  }, [])

  return { elementRef, handleMouseMove, handleMouseLeave, handleMouseEnter }
}
