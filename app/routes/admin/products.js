// app/routes/admin/products.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      categories: this.store.findAll('category'),
    });
  },

  setupController(controller, hash) {
    const model = hash.products;
    const categories = hash.categories;
    this._super(controller, model);

    controller.set('newProduct', this.store.createRecord('product'));
    controller.set('categories', categories);
  },

  actions: {

    addNewProduct(newProduct) {
      console.log(newProduct)
      newProduct.save().then(
        product => {
          console.info('Response:', product);
          this.controller.set('newProduct', this.store.createRecord('product'));
        },
        error => {
          console.error('Error from server:', error);
        });
    },

    editProduct(product) {
      product.set('isEditing', true);
    },
    
    cancelEditProduct(product) {
      product.set('isEditing', false);
      product.rollbackAttributes();
    },

    updateProduct(product) {
      product.save().then(
        product => product.set('isEditing', false)
      );
    },

    deleteProduct(product) {
      product.destroyRecord();
    }
  }
});