import { useState } from 'react'
import { submitForm } from '../lib/api'
import useCaptcha from './useCaptcha'

// Sends a <form> to the backend on submit. `status` is idle | sending | sent | error and `message` the text to
// show. After a successful send `formKey` changes; put it on the <form> as `key` so every field (including
// selects and file pickers that keep their own state) starts empty again.
// Every form also carries a captcha (render <Captcha captcha={captcha} />): a wrong answer stops the send and
// shows its error under the captcha.
export default function useFormSubmit(path, { multipart = false, onSuccess } = {}) {
  const [state, setState] = useState({ status: 'idle', message: '', formKey: 0 })
  const captcha = useCaptcha()

  const onSubmit = async (e) => {
    e.preventDefault()
    if (state.status === 'sending') return
    if (!captcha.validate()) return setState((s) => ({ ...s, status: 'idle', message: '' }))
    const data = new FormData(e.currentTarget)
    setState((s) => ({ ...s, status: 'sending', message: '' }))
    try {
      const reply = await submitForm(path, multipart ? data : Object.fromEntries(data))
      onSuccess?.()
      setState((s) => ({ status: 'sent', message: reply.message, formKey: s.formKey + 1 }))
    } catch (err) {
      setState((s) => ({ ...s, status: 'error', message: err.message }))
    }
  }

  return { ...state, sending: state.status === 'sending', captcha, onSubmit }
}
