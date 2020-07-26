import Layout from '../../../layouts/layout';
function Main(){
    return (
      <main class="page">
          <h3>TOWER OF GOD</h3>
          <label>EPISODE 1 </label><br/><hr/>
          <img src="/1.jpg" />
          <label>Images here...</label>
          <a href="/eps/tog/2"></a>
          <hr/>
          <label>Komentar</label><br/>
          <label>[User] comment </label><br/>
          <textarea></textarea>
          <button>Comment</button>
        </main>
    );
   }
   function TOG(){
    return (
      <Layout>
        <Main />
      </Layout>
    );
   }
   export default TOG;