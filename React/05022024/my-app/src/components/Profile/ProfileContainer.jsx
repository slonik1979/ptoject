import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';




class ProfileContainer extends React.Component{

  componentDidMount() {
    let userId = this.props.match.params.userId;
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/2` + userId
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render () {
  return (
   <Profile {...this.props} profile={this.props.profile}/>
  );
};
};


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    
  };
};

let withUrlDataContainerComponent = (props) => {
  return (<ProfileContainer {...props} params= {useParams()}/>
  )
  }

export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent);
