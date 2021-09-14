function EplRequestSchema(opts) {

  const {
    eplRequestHandlers
  } = opts

  const create = ({fastify}) => {
    return {
      method: "POST",
      url: "/match/add",
      // schema: {
      // },
      handler: eplRequestHandlers.create
    }
  }


  const read = ({fastify}) => {
    return {
      method: "GET",
      url: "/match/get/:match_week",
      // schema: {
      //   query: {
      //     type: 'object',
      //     properties: {
      //       match_week: {
      //         type: 'integer'
      //       }
      //     },
      //     required: ['match_week']
      //   }
      // },
      handler: eplRequestHandlers.read
    }

  }

  const update = ({fastify}) => {
    return {
      method: "POST",
      url: '/match/update',
      schema: {},
      handler: eplRequestHandlers.update
    }
  }
  //
  const erase = ({fastify}) => {
    return {
      method: "DELETE",
      url: "/match/erase/:code",
      // schema: {
      //   params: {
      //     type: 'object',
      //     properties: {
      //       code: {type: 'string'}
      //     }
      //   }
      // },
      handler: eplRequestHandlers.erase
    }

  }

  return {
    create,
    read,
    update,
    erase
  }
}

module.exports = EplRequestSchema
