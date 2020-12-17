import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

const Dashboard = (props) => {
  const { projects, auth, notifications } = props;

  if (!auth.uid) return <Redirect to='/signin' />;

  return (
    <div className='dashboard container'>
      <div className='row'>
        <div className='col s12 m6'>
          <ProjectList projects={projects} />
        </div>
        <div className='col s12 m5 offset-m1'>
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
};

const mapStateToprops = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToprops),
  firestoreConnect([
    { collection: 'projects' },
    { collection: 'notifications', limit: 3 },
  ])
)(Dashboard);
