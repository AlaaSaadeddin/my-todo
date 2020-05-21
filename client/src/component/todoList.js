import React, { useState } from 'react';
import { List, Skeleton, Button, Input } from 'antd';

import 'antd/dist/antd.css';
import './todoList.css';


const ListData = ({ data }) => {
  const [todo, setTodo] = useState({});
  const [title, setTitle] = useState('Untitled');
  const [description, setDescription] = useState('');
  const [todoList, setTodoList] = useState([
    {
      title: 'update project',
      description: 'do your magic to finish your work',
      done: false,
    },
    {
      title: 'doing dishes',
      description: 'clean the dirty dishes',
      done: true,
    },
  ]);

  const updateTodo = () => {
    setTodo({
      title,
      description,
      done: false,
    });
  };
  const updateTitle = (e) => {
    setTitle(e.target.value);
    setTodo({
      title,
      description,
      done: false,
    });
  };
  const updateDesc = (e) => {
    setDescription(e.target.value);
    setTodo({
      title,
      description,
      done: false,
    });
  };
  const updateTodoList = () => {
    setTodoList([...todoList, todo]);
    console.log(todo);
    console.log(todoList);

  };


  return (
    <div className="container">
      <Input  placeholder="Title" name="title" onChange={updateTitle} />
      <Input
        placeholder="Description"
        name="description"
        onChange={updateDesc}
      />
      <Button className="add-btn"
        onClick={() => {
          updateTodoList();
        }}
      >
        Add
      </Button>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={todoList}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                index={index}
              >
                completed
              </Button>,
              <Button
                type="primary"
                danger
              >
                delete
              </Button>,
            ]}
          >
            <Skeleton title={false} loading={false} active>
              <List.Item.Meta
                title={item.title}
                description={item.description}
                style={{ textDecoration: item.done ? 'line-through' : '' }}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListData;
