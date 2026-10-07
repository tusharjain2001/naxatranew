// The line under a form's submit button: the thank-you after a send, or what went wrong.
// It stays in the page (empty) so screen readers announce the message when it appears; `className` (widths,
// offsets) only applies while there is a message, so the empty line can't stretch the page.
export default function FormStatus({ status, message, className = '' }) {
  return (
    <p role="status" aria-live="polite" className={`text-14 leading-20 xl:text-20 xl:leading-28 ${status === 'error' ? 'text-[#d40000]' : 'text-primary'} ${message ? className : 'sr-only'}`}>
      {message}
    </p>
  )
}
