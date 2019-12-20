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

 const loginUser = e => {
  e.preventDefault();
    //axios
    axiosWithAuth()
    .post("/api/login", user)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      console.log(res.data.payload)
      // redirect to the apps main page
      props.history.push('/bubblespage');
    })
    .catch(err => console.log(err));
    console.log('Login error post')
};


  return (

    <div  className='LoginForm'>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form onSubmit={loginUser}>
        <input className='input'
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          value={user.username}
        />

        <input className='input'
          type="text"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={user.password}
        />

        <button>Log in</button>

      </form>
    </div> 
    
  );
};

export default Login;
