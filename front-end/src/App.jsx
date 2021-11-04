/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { fetchTasks, updateTask, deleteTask, newTask } from './Services/api';

const removeOne = (array, id) => array.filter(({ _id }) => _id !== id);
const addOne = (array, payload) => ([...array, payload]);
const updateOne = (array, id, payload) => (
  array.reduce((acc, cur) => {
    // eslint-disable-next-line no-underscore-dangle
    acc.push(cur._id === id ? { ...cur, ...payload } : cur);
    return acc;
  }, [])
);

const asideForm = ({ title, description, status }, onSubmit, onCancel) => (
  <Form className="updateForm">
    <Form.Group controlId="formBasicTitle">
      <Form.Label>Titulo</Form.Label>
      <Form.Control type="text" defaultValue={title} id="title" required />
    </Form.Group>
    <Form.Group controlId="formBasicDescription">
      <Form.Label>Descrição</Form.Label>
      <Form.Control
        as="textarea"
        style={{ height: '100px' }}
        defaultValue={description}
        id="description"
        required
      />
    </Form.Group>
    <Form.Group controlId="formBasicStatus">
      <Form.Label>Status</Form.Label>
      <Form.Select aria-label="status" defaultValue={status} id="status">
        <option value="pendente">pendente</option>
        <option value="em andamento">em andamento</option>
        <option value="pronto">pronto</option>
      </Form.Select>
    </Form.Group>
    <div className="btn-cntrl">
      <Button variant="success" type="submit" onClick={(e) => onSubmit(e)}>Confirmar</Button>
      <Button variant="danger" type="cancel" onClick={() => onCancel()}>Cancelar</Button>
    </div>
  </Form>
);

function App() {
  const DEFAULT_DOC = {
    _id: '',
    title: '',
    description: '',
    status: '',
  };

  const [isEditing, setIsEditing] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [isNotifying, setIsNotifying] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [notification, setNotification] = useState('');
  const [currentDoc, setCurrentDoc] = useState(DEFAULT_DOC);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    fetchTasks('http://localhost:3001/tasks').then((list) => {
      setTasks(list);
    });
  }, []);

  const resetAll = () => {
    setIsEditing(false);
    setIsUpdate(false);
    setCurrentDoc(DEFAULT_DOC);
  };

  const getInfos = () => {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const status = document.querySelector('#status').value;

    return { title, description, status: status || 'pendente' };
  };

  const addTask = async () => {
    // e.preventDefault();
    const payload = getInfos();

    // const currentTasks = [...tasks];
    await newTask('http://localhost:3001/tasks', payload);
    // setTasks([...currentTasks, { _id: id, ...payload }]);
    resetAll();
  };

  const updateATask = async () => {
    // e.preventDefault();
    const { _id } = currentDoc;
    const payload = getInfos();
    await updateTask(`http://localhost:3001/tasks/${_id}`, payload);
    resetAll();
  };

  return (
    <div>
      <header>
        <div className="filters">
          <Form.Select aria-label="order by options">
            <option value="date">Data</option>
            <option value="alphabetical">alfabética</option>
            <option value="status">Status</option>
          </Form.Select>
          <Form.Select aria-label="sort">
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </Form.Select>
          <Button variant="primary" type="submit">Ordenar</Button>
        </div>
        <Button variant="warning" onClick={() => { setIsEditing(true); }}>Adicionar</Button>
      </header>
      <main>
        <ul className="tasksList">
          {
            tasks.map(({ title, description, status, _id, createdAt }) => (
              <Card className="cardParent" key={`task-${_id}`}>
                <Card.Body>
                  <Card.Title className="cardTitle" as="div">
                    {title}
                    <div>
                      <i
                        className="fas fa-pen"
                        onClick={() => {
                          setIsEditing(true);
                          setIsUpdate(true);
                          setCurrentDoc({ _id, title, description, status });
                        }}
                      />
                      <i
                        className="fas fa-trash"
                        onClick={async () => {
                          const res = await deleteTask(`http://localhost:3001/tasks/${_id}`);
                          setIsNotifying(true);
                          setNotification(res);
                        }}
                      />
                    </div>
                  </Card.Title>
                  <Card.Text as="div">
                    {description}
                    <div className="status">{status}</div>
                    <div className="status">{createdAt.substring(0, 10)}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          }
        </ul>
        {isNotifying && <span className="notification">{notification}</span>}
      </main>
      <aside>
        {isEditing && asideForm(currentDoc, isUpdate ? updateATask : addTask, resetAll)}
      </aside>
    </div>
  );
}

export default App;
