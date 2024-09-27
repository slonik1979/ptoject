import { connect } from 'react-redux';
import Users from './User';
import { followAC, serUsersAC, unfollowAC } from '../../Redux/users-reducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(serUsersAC(users));
    },
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;
