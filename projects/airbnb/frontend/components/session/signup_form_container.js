import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
  const { entities: { users }, session: { id } } = state;
  return {
    errors: state.errors.session.errors,
    formType: 'signup',
    currentUser: state.session.id
  }
};

const mDTP = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signup(user))
  }
};

export default connect(mSTP, mDTP)(SessionForm);