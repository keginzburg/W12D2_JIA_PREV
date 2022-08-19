import { connect } from "react-redux";
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
  const { entities: { users }, session: { id } } = state;
  return {
    errors: state.errors.session.errors,
    formType: 'login',
    currentUser: state.session.id,
    ownProps
  }
};

const mDTP = (dispatch) => {
  return {
    processForm: user => dispatch(login(user))
  }
};

export default connect(mSTP, mDTP)(SessionForm);