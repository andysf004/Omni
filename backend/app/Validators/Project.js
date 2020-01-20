'use strict'

class Project {
  get validatorAll () {
    return true
  }

  get rules () {
    return {
      title: 'required'
    }
  }
}

module.exports = Project
