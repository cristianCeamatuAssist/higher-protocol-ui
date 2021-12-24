export const ongoingCallKeyBindings = (e: KeyboardEvent) => {
  let targetEl
  if (e.shiftKey) {
    if (e.key.toLowerCase() === 'e') {
      targetEl = document.getElementById('edit-response') as HTMLButtonElement
      // } else if (e.key.toLowerCase() === 't') {
      //   targetEl = document.getElementById('take-over') as HTMLButtonElement
      // } else if (e.key.toLowerCase() === 'v') {
      //   targetEl = document.getElementById('transfer-voice') as HTMLButtonElement
      // } else if (e.key.toLowerCase() === 'c') {
      //   targetEl = document.getElementById('end-call-button') as HTMLButtonElement
      // } else if (e.key.toLowerCase() === 's') {
      //   targetEl = document.getElementById('stop-take-over') as HTMLButtonElement
    } else if (e.key.toLowerCase() === 'a') {
      targetEl = document.getElementById('approve-response') as HTMLButtonElement
    } else if (e.key.toLowerCase() === 'm') {
      targetEl = document.getElementById('start-audio') as HTMLButtonElement
    } else if (e.key.toLowerCase() === 'p') {
      targetEl = document.getElementById('pass-message') as HTMLButtonElement
    } else if (e.key === 'Enter') {
      targetEl = document.getElementById('send-new-message') as HTMLButtonElement
      e.preventDefault()
    }
  }

  targetEl && targetEl.click()
}

export default { ongoingCallKeyBindings }
