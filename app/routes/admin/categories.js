// app/routes/admin/categories.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('category', { include: 'products' });
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('newCategory', this.store.createRecord('category'));
  },

  actions: {

    addNewCategory(newCategory) {
      newCategory.save().then(
        category => {
          console.info('Response:', category);
          this.controller.set('newCategory', this.store.createRecord('category'));
        },
        error => {
          console.error('Error from server:', error);
        });
    },

    editCategory(category) {
      category.set('isEditing', true);
    },

    cancelEditCategory(category) {
      category.set('isEditing', false);
      category.rollbackAttributes();
    },

    updateCategory(category) {
      category.save().then(
        category => category.set('isEditing', false)
      );
    },

    deleteCategory(category) {
      category.destroyRecord();
    }
  }
});