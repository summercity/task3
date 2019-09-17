import React from 'react';
import Header from './component/Header';
import Reverse from './component/Reverse';
import Card from './component/Card';
import Panel from './component/Panel';
import Loader from './component/Loader';
import Pagination from './component/Pagination'
import Modal from './component/Modal';
import Footer from './component/Footer';

import { 
    findReplace,
    paginatedData, 
} from './helpers';
import { settings } from './settings'
import { tasks } from './fakers';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks,
      token: {
        authenticated: false,
        id: '',
        name: '',
        authToken: '',
      },
      isLoading: false,
      
      tasksList: paginatedData(tasks, settings.page.default, settings.page.size),
      currentPage: 1,

      showModal: false,
      callModal: false,
      payload: {
        taskName: '',
        gallery: {
          primary: 'https://www.iconshock.com/image/Sigma/Project_management/task_completed/'
        }
      }
    };
  }

  login = (auth, {formData}) => {
    this.setState({isLoading: true});
    // Simulate loading..
    setTimeout(() => {
      let { token } = this.state;
      token.authenticated = auth;
      token.id = formData.id;
      token.name = formData.username || 'Jan';
      this.setState({token, isLoading: false});
    }, 
    1000);
   
  }

  handleTasksPageChange = (currentPage) => {
    const {tasks} = this.state;
    const tasksList = paginatedData(tasks, currentPage, settings.page.size);
    this.setState({tasksList, currentPage});
  }

  openModalHandler = (task, edit) => {
    if (edit) {
      let payload = Object.create(task);
      payload.edit = edit;
      this.setState({payload});
    } else {
      const payload = {
        id: Math.floor(100000 + Math.random() * 900000),
        gallery: {
          primary: 'https://www.iconshock.com/image/Sigma/Project_management/task_completed/'
        },
        taskName: '',
        edit
      }
      this.setState({payload});
    }
    

    this.setState({
        showModal: true
    });
  }

  handleChange = (e) => {
    let { payload } = this.state;
    payload[e.target.name] = e.target.value;
    this.setState({payload});
  }

  submitAction = () => {
    let { payload, currentPage, tasks } = this.state;
    this.setState({isLoading: true});
    // Simulate loading..
    setTimeout(() => {
      let tasksList = [];
      if (payload.edit) {
        tasksList = findReplace(tasks, 'taskName', payload.id, payload.taskName);
        tasksList = paginatedData(tasks, currentPage, settings.page.size);
      } else {
        tasks.unshift(payload);
        tasksList = paginatedData(tasks, currentPage, settings.page.size);
      }
      this.setState({showModal: false, tasksList, tasks});
      this.setState({isLoading: false});
    }, 
    3000);
  }

  handleDelete  = (task) => {
    let { currentPage, tasks } = this.state;

    tasks = tasks.filter(person => person.id !== task.id);
    
    let tasksList = paginatedData(tasks, currentPage, settings.page.size);

   
    this.setState({tasksList, tasks});
  }

  closeModalHandler = () => {
      this.setState({
          showModal: false
      });
  }

  render() {
    const { token, isLoading, tasksList, showModal, payload} = this.state;
    return (
      <div className="App">
        <Loader loading={isLoading} />
        <Header token={token} login={this.login} />
        <div className={token.authenticated ? 'App-content set-default': 'App-content '}>
        {token.authenticated || !token.authenticated ?
          <Panel 
            title={settings.panelTitle}
            modal={this.openModalHandler}
          >
            <Reverse text="Hello World!" />
            <div className="App-row">
                {tasksList.data.map((task) =>
                  <div key={'parent'+ task.id} className="App-col">
                    <Card task={task} user={token}  modal={this.openModalHandler} delete={this.handleDelete}/>
                  </div>
                )}
            </div>
            <Pagination pageData={tasksList} handleTasksPageChange={this.handleTasksPageChange} />
          </Panel>
          : ''}
        </div>
        <Modal
          className="modal"
          show={showModal}
          close={this.closeModalHandler}
          submit={this.submitAction}
          delete={this.handleDelete}
          title={settings.modalTitle}
          isLoading={isLoading}
          loadingMsg={settings.loading}>
            <img className="Card-image" src ={payload.gallery.primary} alt="Task" />
           { !payload.edit ? 'Add another task now' :
              <div>
                <h2>Task #:{payload.id}</h2>
                <h2>Task name: {payload.taskName}</h2>
              </div>
           }
            <label>
              <input 
                  type="text" 
                  name="taskName" 
                  maxLength="10"
                  placeholder="Enter task name"
                  onChange={this.handleChange} 
                  value={payload.taskName}
              />
            </label>
        </Modal>
        <Footer />
      </div>
    );
  }
}