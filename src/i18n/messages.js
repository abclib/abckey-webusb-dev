const msg = {
  Home: {
    zhCN: '首页'
  }
}

const lang = {}
for (let txt in msg) {
  for (let loc in msg[txt]) {
    lang[loc] = lang[loc] || {}
    lang[loc][txt] = msg[txt][loc]
  }
}

export default {
  ...lang
}
