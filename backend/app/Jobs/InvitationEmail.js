'use strict'

const Mail = use('Mail')

class InvitationEmail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'InvitationEmail-job'
  }

  // This is where the work is done.
  async handle ({ user, team, email }) {
    console.log(user.username)
    console.log(team.name)
    console.log(email)

    await Mail.send(
      ['emails.invitation'],
      { team: team.name, user: user.username },
      message => {
        message
          .to(email)
          .from('and@hotmail.com', 'Anderson | OmniStack')
          .subject(`Convite para o time ${team.name}`)
      }
    )
  }
}

module.exports = InvitationEmail
