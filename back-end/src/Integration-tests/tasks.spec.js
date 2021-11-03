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
  before(async () => {
    const VirtualDB = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(VirtualDB);
  });

  after(() => {
    MongoClient.connect.restore();
  });


  it('É possível adicionar novas tarefas', async () => {
    const response = await chai.request(server).post('/tasks').send(DEFAULT_PAYLOAD);

    expect(response).to.have.status(201);
    expect(response).to.be.a('object');
    expect(response.body).to.have.property('result');
    expect(response.body.result).to.have.property('title');
  });

  it('Não é possível adicionar novas tarefas sem titulo', async () => {
    const { title, ...withoutKey } = DEFAULT_PAYLOAD;
    const response = await chai.request(server).post('/tasks').send(withoutKey);

    expect(response).to.have.status(400);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.be.equal('Invalid entries. Try again.');
  });

  it('Não é possível adicionar novas tarefas sem descrição', async () => {
    const { description, ...withoutKey } = DEFAULT_PAYLOAD;
    const response = await chai.request(server).post('/tasks').send(withoutKey);

    expect(response).to.have.status(400);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.be.equal('Invalid entries. Try again.');
  });

  it('Não é possível adicionar novas tarefas sem status', async () => {
    const { status, ...withoutKey } = DEFAULT_PAYLOAD;
    const response = await chai.request(server).post('/tasks').send(withoutKey);

    expect(response).to.have.status(400);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.be.equal('Invalid entries. Try again.');
  });
});

describe.only('Atualizar tarefas', () => {
  before(async () => {
    const VirtualDB = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(VirtualDB);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  it('É possível atualizar uma tarefa', async () => {
    const { body: { result: { id } } } = await chai.request(server).post('/tasks').send(DEFAULT_PAYLOAD);
    console.log(id);
    const response = await chai.request(server).put(`/tasks/${id}`).send(DEFAULT_UPLOAD);

    expect(response).to.have.status(201);
    expect(response).to.be.a('object');
    expect(response.body).to.have.property('result');
    expect(response.body.result).to.have.property('title');
    expect(response.body.result.title).to.be.equal(DEFAULT_UPLOAD.title);
  });

  // it('Não é possível atualizar tarefas sem titulo', () => {});

  // it('Não é possível atualizar tarefas sem descrição', () => {});

  // it('Não é possível atualizar tarefas sem status', () => {});

  // it('Não é possível atualizar tarefas com id inválido', () => {});
});

describe('Deletar tarefas', () => {
  before(async () => {
    const VirtualDB = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(VirtualDB);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  it('É possível Deletar uma tarefa', () => {});

  it('Não é possível deletar uma tarefa com id inválido', () => {});
});

describe('Listar todas as tarefas', () => {
  before(async () => {
    const VirtualDB = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(VirtualDB);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  it('É possível listar todas as tarefas', () => {});
});
