import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  products: DS.hasMany('products', {inverse: 'category', async: true}),

  isEditing: false,
});
