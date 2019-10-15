

var store = {
    debug: true,
    state: {
      lauguage:  
    },
    setMessageAction (newValue) {
      if (this.debug) console.log('setMessageAction triggered with', newValue)
      this.state.message = newValue
    },
    clearMessageAction () {
      if (this.debug) console.log('clearMessageAction triggered')
      this.state.message = ''
    }
  }