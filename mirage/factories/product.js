import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name: faker.commerce.productName,
  sku: faker.random.alphaNumeric,
  unitPrice: faker.commerce.price,

  afterCreate(product /*, server */) {
    product.categoryId = faker.random.number({min: 1, max: 10});
    product.save();
  }

});
