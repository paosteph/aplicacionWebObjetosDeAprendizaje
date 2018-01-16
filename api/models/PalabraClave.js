/**
 * PalabraClave.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // primarios
    nombre: {
      type: 'string'
    },

    // Relaciones
    objetosDeAprendizajes: {
      collection: 'ObjectoAprendizaje',
      via: 'palabrasClaves'

    }
  }
};

