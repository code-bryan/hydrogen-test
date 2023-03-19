// import Button from "../components/button/index.client";

import { core } from "../App.server";

export default function Home() {
  const login = () => {
    core.auth.login('demo@dealerappcenter.com', 'nosenose').then((response) => {
      console.log('login =>', { response });
    });
  }
  login();
  return <div>Hello World</div>;
}
