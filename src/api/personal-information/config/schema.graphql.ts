export default {
  definition: ``,
  typeDefs: `
    extend type Query {
      myPersonalInformation: PersonalInformation
    }

    extend type Mutation {
      updateMyPersonalInformation(input: PersonalInformationInput): PersonalInformation
    }
  `,
  type: {},
  resolvers: {
    Query: {
      myPersonalInformation: {
        resolve: async (obj, options, ctx) => {
          const { user } = ctx.state;

          const personalInformations = await strapi.query("api::personal-information.personal-information").findOne({
            where: {
              user: user.id
            }
          });

          return personalInformations;
        },
      },
    },
    Mutation: {
      updateMyPersonalInformation: {
        resolve: async (obj, options, ctx, data) => {
          const { input } = data.variableValues;
          const { user } = ctx.state;

          const personalInformation = await strapi.db.query("api::personal-information.personal-information").update({
            where: { user: user.id },
            data: input,
          });

          return personalInformation;
        },
      },
    },
  },
};
