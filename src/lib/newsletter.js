import { submitForm } from './api'

// Footer newsletter sign-up: the backend's /api/newsletter checks the reCAPTCHA token with Google, then
// emails the team and a welcome email to the subscriber.
export function subscribe(email, captcha) {
  return submitForm('newsletter', { email, captcha })
}
