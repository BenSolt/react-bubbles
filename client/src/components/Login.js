import React, {useState} from "react";
import axiosWithAuth from '../utils/AxiosWithAuth';

const initialState = {
  credentials: {
    username: '',
    password: ''
  }
};

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState(initialState);

  const handleChange = e => {
      e.persist()
      let value = e.target.value;
  
      setUser({
      ...user,
      [e.target.name]: value
  })
}

 const login = e => {
  e.preventDefault();
    //axios
    axiosWithAuth()
    .post("/login", user)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      console.log(res.data.payload)
      // redirect to the apps main page
      props.history.push('/bubblespage');
    })
    .catch(err => console.log(err));
    console.log('Login error')
};


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
