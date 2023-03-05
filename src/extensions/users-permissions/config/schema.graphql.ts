const extention = ({ nexus }) => ({
  definition: ``,
  types: [
    nexus.inputObjectType({
      name: 'MyUserInput',
      definition(t) {
        t.string('email');
        t.string('username');
      },
    }),
  ],
  typeDefs: `
    extend type Mutation {
      updateMyUser(input: MyUserInput): UsersPermissionsUser
    }
  `,
  type: {},
  resolvers: {
    Mutation: {
      updateMyUser: {
        resolve: async (obj, options, ctx, data) => {
          const { input } = data.variableValues;
          const { user } = ctx.state;
          console.log("input", input)

          const me = await strapi.entityService.update("plugin::users-permissions.user", user.id, {
            data: input,
          })

          return me;
        },
      },
    },
  },
});

export default extention;