import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './TodoApp.css';

export default function TodoApp({ task, tasks, inputTask, addTask, redirectToError }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            Todo
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '16px'}}>
        <Input onChange={(e) => inputTask(e.target.value)} />
        <Button raised="true" variant="contained" color="secondary" onClick={() => addTask(task)}>add</Button>
        <List>
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            {
              tasks.map(function(item, i) {
                return (
                  <ListItem key={i}>
                    <ListItemText primary={`＊${item}`} />
                  </ListItem>
                );
              })
            }
          </ReactCSSTransitionGroup>
        </List>
      </div>
      <button onClick={() => redirectToError()} >エラーページへ</button>
    </div>
  );
}