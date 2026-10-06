// Google reCAPTCHA v2 ("I'm not a robot"), loaded once on demand and rendered explicitly into a box.
// Set VITE_RECAPTCHA_SITE_KEY for the real site; without it Google's public test key is used, which
// always passes and shows a "for testing purposes only" note in the widget.
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

let loading

export function loadRecaptcha() {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha)
  loading ??= new Promise((resolve, reject) => {
    window.__onRecaptchaLoad = () => resolve(window.grecaptcha)
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js?onload=__onRecaptchaLoad&render=explicit'
    script.async = true
    script.defer = true
    script.onerror = () => {
      loading = undefined
      reject(new Error('reCAPTCHA failed to load'))
    }
    document.head.appendChild(script)
  })
  return loading
}
