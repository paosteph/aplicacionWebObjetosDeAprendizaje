/**
 * Autor.js
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
    apellido: {
      type: 'string'
    },
    email: {
      type: 'email'
    },

    // relaciones
    tipoDeUsuarios: {
      collection: 'TipoDeUsuario',
      via: 'autores',
      dominant: true
    }
  }
};


