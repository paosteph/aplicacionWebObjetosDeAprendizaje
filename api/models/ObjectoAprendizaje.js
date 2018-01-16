/**
 * ObjectoAprendizaje.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    // primarios
    descripcion: {
      type: 'string'
    },
    idioma: {
      type: 'string'
    },
    nombre: {
      type: 'string'
    },

    // relaciones
    palabrasClaves: {
      collection: 'PalabraClave',
      via: 'objetosDeAprendizajes',
      dominant: true
    },
    autor: {
      model: 'Autor'
    },
    areaAprendizaje: {
      model: 'Arear',
    }

  }
};

