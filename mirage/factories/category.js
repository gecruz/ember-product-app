// mirage/factories/category.js
import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name: faker.commerce.department,

});