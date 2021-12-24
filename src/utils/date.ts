const DEFAULT_DATE_SEPARATOR = '/'

export const dateDiff = (date1: Date, date2: Date) => {
  if (date1 && date2) {
    return date1.getTime() - date2.getTime()
  }
  return null
}

export const dateToHHMMSS = (time: string | number | null) => {
  if (time) {
    const result = new Date(time).toISOString().substr(11, 8)
    // Don't show the hours if is 00
    return removeZeros(result)
  }
  return null
}

export const dateToSSMS = (time: string | number | null) => {
  if (time) {
    const result = new Date(time).toISOString().substr(14, 8)
    // Don't show the minutes if is 00
    return removeZeros(result)
  }
  return null
}

export const formatAMPM = (date: Date) => {
  let hours = date.getHours()
  let minutes: string | number = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes

  const strTime = hours + ':' + minutes + ' ' + ampm
  return strTime
}

export const removeZeros = (duration: string) => {
  return duration.slice(0, 2) === '00' ? duration.slice(3) : duration
}

export const formatDateSeparator = (date: string, separator: string) => {
  if (isValidDate(date)) {
    const d = new Date(date),
      year = d.getFullYear()
    let month = '' + (d.getMonth() + 1),
      day = '' + d.getDate()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [month, day, year].join(separator)
  }
  return date
}

export const formatDateWithAMPM = (value: string, separator = DEFAULT_DATE_SEPARATOR) => {
  if (isValidDate(value)) {
    return `${formatDateSeparator(value, separator)} ${formatAMPM(new Date(value))}`
  }
  return value
}

export const isValidDate = (value: string) => {
  const date = new Date(value)
  return date instanceof Date && !isNaN(date.getTime())
}
