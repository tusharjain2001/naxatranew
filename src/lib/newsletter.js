// Sends a newsletter sign-up to the backend. Until VITE_NEWSLETTER_URL is set it only waits a moment
// and succeeds, so the form's Joining… → Thank You! flow can be seen without a server.
// The backend receives JSON { email, captcha } and must verify `captcha` with Google's siteverify API
// (using the reCAPTCHA secret key) before saving the email.
const endpoint = import.meta.env.VITE_NEWSLETTER_URL

export async function subscribe(email, captcha) {
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 800))
    return
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, captcha }),
  })
  if (!res.ok) throw new Error(`Newsletter sign-up failed (${res.status})`)
}
