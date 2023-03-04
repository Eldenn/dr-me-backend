export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    const extension = ({ nexus }) => ({
      // types: [
      //   nexus.objectType({
      //     name: 'Book',
      //     definition(t) {
      //       t.string('title');
      //     },
      //   }),
      // ],
      typeDefs: `
          type Query {
            book: Book
          }

          type Book {
            title: String
          }
      `,
      resolvers: {
        Query: {
          book: {
            resolve() {
              return { title: 'Montpellier' };
            },
          },
        },
      },
      
    });
    

    extensionService.use(extension);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
