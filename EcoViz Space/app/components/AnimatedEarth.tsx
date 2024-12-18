'use client'

import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const EarthCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const AnimatedEarth = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const earthImage = new Image()
    earthImage.src = '/earth-texture.jpg' // Make sure to add this image to your public folder
    earthImage.onload = () => {
      let rotation = 0

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw stars
        for (let i = 0; i < 200; i++) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
          ctx.beginPath()
          ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 2,
            0,
            Math.PI * 2
          )
          ctx.fill()
        }

        // Draw Earth
        ctx.save()
        ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.rotate(rotation)
        ctx.drawImage(earthImage, -200, -200, 400, 400)
        ctx.restore()

        rotation += 0.005
        requestAnimationFrame(animate)
      }

      animate()
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <EarthCanvas ref={canvasRef} />
}

export default AnimatedEarth

