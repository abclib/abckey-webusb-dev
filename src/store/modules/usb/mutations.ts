export default {
  __set(state: any, msg: any) {
    state[msg.key] = msg.val
  }
}
