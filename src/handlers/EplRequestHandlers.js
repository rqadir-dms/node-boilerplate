function EplRequestHandlers(opts) {

  const {
    logger,
    svcMatches
  } = opts

  const create = async (request, reply) => {
    const {id} = await svcMatches.createMatch(request.body)
    reply.send({ok: true, id})

  }
  const read = async (request, reply) => {
    const {match_week} = request.params
    const matches = await svcMatches.readMatches({
      match_week
    })

    reply.send({ok: true, matches})

  }
  const update = async (request, reply) => {
    const {match_week, home_team, away_team, stadium, code} = request.body
    let updateColsStr = ''

    if (match_week) updateColsStr += `week = ${match_week},`
    if (home_team) updateColsStr += `home_team = ${home_team},`
    if (away_team) updateColsStr += `away_team = ${away_team},`
    if (stadium) updateColsStr += `stadium = ${stadium}`
    else if (updateColsStr) updateColsStr = updateColsStr.slice(0,-1)

    const {id} = await svcMatches.updateMatch({
      updateColsStr,
      code
    })
    reply.send({ok: true, id})

  }
  const erase = async (request, reply) => {
    const {code} = request.params
    const {id} = await svcMatches.eraseMatch({
      code
    })

    reply.send({ok: true, id})

  }


  return {
    create,
    read,
    update,
    erase
  }

}

module.exports = EplRequestHandlers
