const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../Api/app');
const { MongoClient } = require('mongodb');
const getConnection = require('./connection');

chai.use(chaiHttp);
const { expect } = chai;

const DEFAULT_PAYLOAD = {
  title: 'My task',
  description: 'My task description',
  status: 'up to be done',
};

const DEFAULT_UPLOAD = {
  title: 'My task updated',
  description: 'My task description',
  status: 'done',
};

describe('Novas tarefas', () => {
  it('É possível adicionar novas tarefas', () => {});
  it('Não é possível adicionar novas tarefas sem titulo', () => {});
  it('Não é possível adicionar novas tarefas sem descrição', () => {});
  it('Não é possível adicionar novas tarefas sem status', () => {});
});

describe('Atualizar tarefas', () => {
  it('É possível atualizar uma tarefa', () => {});
  it('Não é possível atualizar tarefas sem titulo', () => {});
  it('Não é possível atualizar tarefas sem descrição', () => {});
  it('Não é possível atualizar tarefas sem status', () => {});
  it('Não é possível atualizar tarefas com id inválido', () => {});
});

describe('Deletar tarefas', () => {
  it('É possível Deletar uma tarefa', () => {});
  it('Não é possível deletar uma tarefa com id inválido', () => {});
});

describe('Listar todas as tarefas', () => {
  it('É possível listar todas as tarefas', () => {});
});
