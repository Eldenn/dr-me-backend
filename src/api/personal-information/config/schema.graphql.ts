export default {
  definition: ``,
  typeDefs: `
    type Query {
      myPersonalInformation: PersonalInformation
    }
  `,
  query: `
    type Query {
      myPersonalInformation: PersonalInformation
    }
  `,
  type: {},
  resolvers: {
    Query: {
      myPersonalInformation: {
        resolve: async () => {
          const ctx = strapi.requestContext.get();
          const { user } = ctx.state;
          const personalInformation = await strapi.entityService.findOne('api::personal-information.personal-information', 1, {
            user: user.id,
          });

          return personalInformation;
        },
      },
    },
  },
};
