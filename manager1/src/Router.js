import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" modal hideNavBar>
        <Scene key="auth" initial title="Please Login" >
            <Scene key="login" component={LoginForm} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;

// <Scene key="main">
// <Scene
// rightTitle="Add"
// key="employeeList"
// component={EmployeeList}
// title="Employeessss"
// onRight={() => alert('Right button')}
// />
// </Scene>
