import Layout from '../layouts/layout2';

function Login(){
  return (
    <main class="page">
        <h3>Login</h3><br/>
        <label>Username </label><br/><input type="text" /><br/>
        <label>Password </label><br/><input type="password" /><br/><br/>
        <a href="/beranda"><button>Login</button></a><br/>
      </main>
  );
 }
 function Register(){
  return (
    <main class="page">
        <h3>Register</h3><br/>
        <label>Nama </label><br/><input type="text" /><br/>
        <label>Usia </label><br/><input type="number" /><br/>
        <label>Username </label><br/><input type="text" /><br/>
        <label>Password </label><br/><input type="password" /><br/>
        <label>Ulang Password </label><br/><input type="password" /><br/><br/>
        <a href="/beranda"><button>Register</button></a>
      </main>
  );
 }
 function Display(){
  return (
    <Layout>
      <br/>
      <Login />
      <br/>
      <hr />
      <br/>
      <Register />
    </Layout>
  );
 }
 export default Display;