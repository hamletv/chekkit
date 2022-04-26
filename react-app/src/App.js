import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import { getPosts } from './store/post';
import { getComments } from './store/comment';
import AllPosts from './components/posts/Posts';
import NewPost from './components/posts/MediaPost';
import MediaPost from './components/posts/MediaPost';
import SinglePost from './components/posts/SinglePost';
import LoginFormModal from './components/auth/LoginFormModal';
import CreatePost from './components/posts/CreatePost';
import ErrorPage from './components/auth/404Page';
import SplashPage from './components/Splash/SplashPage';
import NewNavBar from './components/NavBar/NewNavBar';
import { getComms } from './store/community';
import CreateCommForm from './components/community/CreateComm';
import AllCommunities from './components/community/AllComms';
import SingleCommunity from './components/community/SingleComm';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getPosts());
      await dispatch(getComments());
      await dispatch(getComms());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NewNavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/new-subchekkit' exact={true} >
          <CreateCommForm/>
        </ProtectedRoute>
        <ProtectedRoute path='/communities' exact={true} >
          <AllCommunities/>
        </ProtectedRoute>
        <ProtectedRoute path='/posts' exact={true} >
          <AllPosts/>
        </ProtectedRoute>
        <ProtectedRoute path='/posts/:id' exact={true} >
          <SinglePost/>
        </ProtectedRoute>
        <ProtectedRoute path='/communities/:id' exact={true} >
          <SingleCommunity/>
        </ProtectedRoute>
        <ProtectedRoute path='/new' exact={true} >
          <CreatePost/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          {/* <AllPosts/> */}
          <SplashPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
