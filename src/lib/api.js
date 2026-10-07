// The form backend (naxatranew-backend). VITE_API_URL is its address in production; left empty, requests go
// to /api on this site, which the Vite dev/preview server proxies to the backend on localhost:5000.
const base = (import.meta.env.VITE_API_URL ?? '').replace(/\/+$/, '')

const FALLBACK = 'Something went wrong. Please try again.'

// Posts a form to /api/<path>: FormData goes as multipart (file uploads), anything else as JSON.
// Resolves with the server's reply; rejects with an Error whose message can be shown to the visitor.
export async function submitForm(path, body) {
  let res
  try {
    res = await fetch(`${base}/api/${path}`, {
      method: 'POST',
      ...(body instanceof FormData ? { body } : { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }),
    })
  } catch {
    throw new Error('Couldn’t reach our server. Please check your connection and try again.')
  }
  const reply = await res.json().catch(() => ({}))
  if (!res.ok || !reply.ok) throw new Error(reply.message || FALLBACK)
  return reply
}
