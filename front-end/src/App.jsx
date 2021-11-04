/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import fetchTasks from './Services/api';

// const resetForm = () => { };
// const validateFilter = () => { };
// const validateForm = () => { };

const asideForm = (onSubmit, onCancel) => (
  <Form className="updateForm">
    <Form.Group controlId="formBasicTitle">
      <Form.Label>Titulo</Form.Label>
      <Form.Control type="text" required />
    </Form.Group>
    <Form.Group controlId="formBasicDescription">
      <Form.Label>Descrição</Form.Label>
      <Form.Control as="textarea" style={{ height: '100px' }} required />
    </Form.Group>
    <Form.Group controlId="formBasicStatus">
      <Form.Label>Status</Form.Label>
      <Form.Select aria-label="status">
        <option>Selecione</option>
        <option value="pendente">pendente</option>
        <option value="em andamento">em andamento</option>
        <option value="pronto">pronto</option>
      </Form.Select>
    </Form.Group>
    <div className="btn-cntrl">
      <Button variant="success" type="submit" onClick={() => onSubmit}>Confirmar</Button>
      <Button variant="danger" type="cancel" onClick={() => onCancel}>Cancelar</Button>
    </div>
  </Form>
);

function App() {
  const DEFAULT_DOC = {
    title: '',
    description: '',
    status: '',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotifying, setIsNotifying] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [notification, setNotification] = useState('');
  const [currentDoc, setCurrentDoc] = useState(DEFAULT_DOC);

  useEffect(() => {
    fetchTasks('http://localhost:3001/tasks').then((list) => {
      setTasks(list);
    });
  }, []);

  return (
    <div>
      <header>
        <div className="filters">
          <Form.Select aria-label="order by options">
            <option>Ordenar por</option>
            <option value="alphabetical">alfabética</option>
            <option value="date">Criação</option>
            <option value="status">Status</option>
          </Form.Select>
          <Form.Select aria-label="sort">
            <option>Organizar</option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </Form.Select>
          <Button variant="primary" type="submit">Ordenar</Button>
        </div>
        <Button variant="warning">Adicionar</Button>
      </header>
      <main>
        <ul className="tasksList">
          {
            tasks.map(({ title, description, status }) => (
              <Card className="cardParent">
                <Card.Body>
                  <Card.Title className="cardTitle" as="div">
                    {title}
                    <div>
                      <i className="fas fa-pen" />
                      <i className="fas fa-trash" />
                    </div>
                  </Card.Title>
                  <Card.Text as="div">
                    {description}
                    <div className="status">{status}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          }
        </ul>
        {isNotifying && <span className="notification">{notification}</span>}
      </main>
      <aside>
        { isEditing && asideForm(console.log('sumit'), console.log('cancel'))}
      </aside>
    </div>
  );
}

export default App;
