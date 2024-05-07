import { connect } from 'react-redux';
import Users from './Users';
import {
  followAC,
  setCurrentPageAC,
  setTotalUserCountAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/users-reducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    onfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersConteiner;
