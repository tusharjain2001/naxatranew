import { submitForm } from './api'

// Footer newsletter sign-up: the backend's /api/newsletter emails the team and a welcome email to the
// subscriber.
export function subscribe(email) {
  return submitForm('newsletter', { email })
}
