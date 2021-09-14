
function SvcMatches(opts) {
  const { mdlMatches, db, encryptor } = opts


  const createMatch = async params => {
    const {create} = mdlMatches
    const taskResult = await db.primary.task(async tx => {
      return id = await tx.one(create, params)
    })

    return taskResult
  }

  const readMatches = async params => {
    const {read} = mdlMatches
    const taskResult = await db.primary.task(async tx => {
      return matches = await tx.many(read, params)
    })

    return taskResult
  }

  const updateMatch = async params => {
    const {update} = mdlMatches
    const taskResult = await db.primary.task(async tx => {
      return id = await tx.one(update, params)
    })

    return taskResult
  }

  const eraseMatch = async params => {
    const {erase} = mdlMatches
    const taskResult = await db.primary.task(async tx => {
      return id = await tx.one(erase, params)
    })

    return taskResult

  }

  return {
    createMatch,
    updateMatch,
    readMatches,
    eraseMatch
  }

}

module.exports = SvcMatches
