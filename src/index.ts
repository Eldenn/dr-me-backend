import personalInformationExtention from "./api/personal-information/config/schema.graphql";
import usersPermissionsExtension from "./extensions/users-permissions/config/schema.graphql";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");
    extensionService.use(personalInformationExtention);
    extensionService.use(usersPermissionsExtension);
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
