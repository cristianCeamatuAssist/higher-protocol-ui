import { animateScroll } from 'react-scroll'

export const scrollElementToBottom = (id: string) => {
  animateScroll.scrollToBottom({
    containerId: id,
  })
}

export const scrollIntoView = (id: string, block?: ScrollLogicalPosition) => {
  if (document?.getElementById(id)) {
    const element = document.getElementById(id) as HTMLElement
    element.scrollIntoView({ behavior: 'smooth', block: block || 'end' })
  }
}

export const focusAndSelect = (id: string) => {
  const textarea = document.getElementById(id) as HTMLTextAreaElement
  if (textarea) {
    setTimeout(() => {
      textarea.focus()
      textarea.select()
    }, 1)
  }
}

export const focus = (id: string) => {
  const textarea = document.getElementById(id) as HTMLTextAreaElement
  if (textarea) {
    setTimeout(() => {
      textarea.focus()
    }, 1)
  }
}

export default { scrollElementToBottom, scrollIntoView, focusAndSelect, focus }
