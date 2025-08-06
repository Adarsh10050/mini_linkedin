import React from 'react';
import CreatePost from '../components/CreatePost';
import PostFeed from '../components/PostFeed';

function Profile() {
  return (
    <div>
      <h1>Your Profile</h1>
      <CreatePost />
      <PostFeed />
    </div>
  );
}

export default Profile;
