const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  nome: {
    type: String,
    required: true,
    minLength: 6
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
    minLength: 11,
    maxLength: 11
  },
  telefone: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 11
  },
  rua: {
    type: String,
    required: true
  },
  numero: {
    type: String,
    required: true
  },
  complemento: {
    type: String,
    maxLength: 140
  },
  bairro: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 8
  },
  cidade: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 2
  }
});

module.exports = mongoose.model('Cliente', clienteSchema);
