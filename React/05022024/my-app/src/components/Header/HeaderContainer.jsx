
import React from 'react'
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer copy';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0//auth/me, {withCredentials: true}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }


  render() {

    return <Header {...this.props}/>

  }

    
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect (mapStateToProps, {setAuthUserData} ) (HeaderContainer);