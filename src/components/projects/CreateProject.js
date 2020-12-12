import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../store/actions/projectActions';

const Createproject = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const state = {
    title: title,
    content: content,
  };
  const { auth } = props;

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else if (e.target.id === 'content') {
      setContent(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProject(state);
    props.history.push('/');
  };

  if (!auth.uid) return <Redirect to='/signin' />;

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Create New Project</h5>
        <div className='input-field'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' onChange={handleChange} />
        </div>

        <div className='input-field'>
          <label htmlFor='content'>Project Content</label>
          <textarea
            className='materialize-textarea'
            type='text'
            id='content'
            onChange={handleChange}
          />
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>Create</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Createproject);
