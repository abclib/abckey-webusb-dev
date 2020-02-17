export default {
  __set(state, msg) {
    state[msg.key] = msg.val
  }
}
