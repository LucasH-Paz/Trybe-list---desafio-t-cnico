import React, { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

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
  const [currentDoc, setCurrentDoc] = useState(DEFAULT_DOC);

  return (
    <div>
      <header>
        <div className="filters">
          <Form.Select aria-label="order by options">
            <option>Ordenar por</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
          <Card className="cardParent">
            <Card.Body>
              <Card.Title className="cardTitle" as="div">
                Title
                <div>
                  <i className="fas fa-pen"></i>
                  <i className="fas fa-trash"></i>
                </div>
              </Card.Title>
              <Card.Text as="div">
                With supporting text below as a natural lead-in to additional content.
                <div className="status">Status come here!</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </ul>
        <span className="notification">Notifications will come here!</span>
      </main>
      <aside>
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
            <Button variant="success" type="submit">Confirmar</Button>
            <Button variant="danger" type="cancel">Cancelar</Button>
          </div>
        </Form>
      </aside>
    </div>
  );
}

export default App;
