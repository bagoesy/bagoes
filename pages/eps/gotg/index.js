import Layout from '../../../layouts/layout';
function Main(){
    return (
      <main class="page">
          <h3>GOD OF THE GOD</h3>
          <label>EPISODE 1 </label><br/><hr/>
          <img src="/1.jpg" />
          <label>Images here...</label><br/>
          <a href="/eps/gotg/2">Next </a>
          <hr/>
          <label>Komentar</label><br/>
          <label>[User] comment </label><br/>
          <textarea></textarea>
          <button>Comment</button>
        </main>
    );
   }
   function GOTG(){
    return (
      <Layout>
        <Main />
      </Layout>
    );
   }
   export default GOTG;