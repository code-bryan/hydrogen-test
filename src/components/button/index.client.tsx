import { core } from "../../App.server";

export default function Button() {
  const login = () => {
    core.auth.login('demo@dealerappcenter.com', 'nosenose').then((response) => {
      // localStorage.setItem('token', response.token);
      console.log('login =>', { response });
    });
  }
  
  return <button onClick={login}>Login</button>;
}