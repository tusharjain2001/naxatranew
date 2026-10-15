import { useCallback, useState } from 'react'

// Text captcha for the site's forms, as on the previous site. Look-alike characters (O/0, I/1) are left out so
// real visitors don't fail on them.
const CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const LENGTH = 5

const newCode = () => Array.from({ length: LENGTH }, () => CHARSET[Math.floor(Math.random() * CHARSET.length)]).join('')

// Holds one form's captcha. `validate()` checks the typed answer and always issues a fresh code, so a wrong
// answer can't simply be retried.
export default function useCaptcha() {
  const [code, setCode] = useState(newCode)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const regenerate = useCallback(() => {
    setCode(newCode())
    setInput('')
    setError('')
  }, [])

  const validate = useCallback(() => {
    const ok = input.trim().toUpperCase() === code
    setCode(newCode())
    setInput('')
    setError(ok ? '' : 'Incorrect captcha. Please try again.')
    return ok
  }, [code, input])

  return { code, input, setInput, error, regenerate, validate }
}
