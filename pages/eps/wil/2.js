import Layout from '../../../layouts/layout';
function Main(){
    return (
      <main class="page">
          <h3>WHAT IS LOVE?</h3>
          <label>EPISODE 2 </label><br/><hr/>
          <img src="/1.jpg" />
          <label>Images here...</label>
          <a href="/eps/wil/2"></a>
          <hr/>
          <label>Komentar</label><br/>
          <label>[User] comment </label><br/>
          <textarea></textarea>
          <button>Comment</button>
        </main>
    );
   }
   function WIL(){
    return (
      <Layout>
        <Main />
      </Layout>
    );
   }
   export default WIL;