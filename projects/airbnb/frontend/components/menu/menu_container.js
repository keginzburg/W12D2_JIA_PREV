import { connect } from "react-redux";
import Menu from './menu';
import { logout } from "../../actions/session_actions";

const mSTP = (state) => {
  const { entities: { users }, session: { id } } = state;
  return {
    currentUser: users[id]
  }
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
};

export default connect(mSTP, mDTP)(Menu);