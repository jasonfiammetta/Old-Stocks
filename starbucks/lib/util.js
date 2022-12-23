
export function timeSince(now) {
  let then = now
  now = Date.now()
  return [now, now - then]
}

let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
export function randomCharacters(n) {
  let result = ''
  for(let i = 0; i < n; i++) {
    result += chars[Math.floor(Math.random()*chars.length)]
  }
  return result
}

// export default {
//   timeSince,
// }
