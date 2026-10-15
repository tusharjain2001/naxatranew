import { useEffect, useRef } from 'react'

// The captcha row every form shows above its submit button: the code drawn on a canvas, a button for a new
// code, and the answer box. Each form passes its own label and input classes (and the row height) so the row
// matches that form's fields. The answer isn't sent with the form; useFormSubmit checks it first.
const W = 190
const H = 56
const INKS = ['#000000', '#1863da', '#0b4eb7', '#333333']

function CodeImage({ code, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    // Drawn at 2x or more so the turned characters stay sharp.
    const ratio = Math.max(2, window.devicePixelRatio || 1)
    canvas.width = W * ratio
    canvas.height = H * ratio
    const ctx = canvas.getContext('2d')
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, W, H)

    // Faint noise behind the code.
    for (let i = 0; i < 3; i++) {
      ctx.beginPath()
      ctx.strokeStyle = `rgba(24, 99, 218, ${0.1 + Math.random() * 0.08})`
      ctx.moveTo(Math.random() * W, Math.random() * H)
      ctx.lineTo(Math.random() * W, Math.random() * H)
      ctx.stroke()
    }
    for (let i = 0; i < 16; i++) {
      ctx.fillStyle = `rgba(81, 81, 81, ${0.1 + Math.random() * 0.1})`
      ctx.fillRect(Math.random() * W, Math.random() * H, 1.5, 1.5)
    }

    const pad = W * 0.08
    const step = (W - pad * 2) / code.length
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ;[...code].forEach((char, i) => {
      ctx.save()
      ctx.translate(pad + step * (i + 0.5), H / 2 + (Math.random() * 4 - 2))
      ctx.rotate(Math.random() * 0.34 - 0.17)
      ctx.font = `700 ${H * (0.56 + Math.random() * 0.08)}px "Helvetica Neue", Helvetica, Arial, sans-serif`
      ctx.fillStyle = INKS[Math.floor(Math.random() * INKS.length)]
      ctx.fillText(char, 0, 0)
      ctx.restore()
    })
  }, [code])

  return <canvas ref={ref} role="img" aria-label="Captcha code" className={`aspect-[190/56] shrink-0 rounded-4 border border-silver select-none ${className}`} />
}

export default function Captcha({ captcha, id, labelClass, inputClass, height, className = '' }) {
  const { code, input, setInput, error, regenerate } = captcha
  return (
    <div className={`flex min-w-0 flex-col gap-8 ${className}`}>
      <label htmlFor={id} className={labelClass}>
        Enter Captcha
        <span className="text-[red]"> *</span>
      </label>
      <div className="flex items-center gap-8 xl:gap-12">
        <CodeImage code={code} className={height} />
        <button
          type="button"
          onClick={regenerate}
          aria-label="Get a new captcha code"
          title="Get a new code"
          className={`grid aspect-square shrink-0 cursor-pointer place-items-center rounded-4 border border-silver ${height}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden className="size-16 xl:size-20" fill="none" stroke="#1863da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6" />
          </svg>
        </button>
        <input
          id={id}
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          required
          placeholder="Enter code"
          autoComplete="off"
          spellCheck="false"
          maxLength={code.length + 2}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`min-w-0 flex-1 tracking-[0.12em] ${inputClass}`}
        />
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="text-14 leading-20 text-[#d40000] xl:text-16">
          {error}
        </p>
      )}
    </div>
  )
}
