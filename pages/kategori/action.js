import Layout from '../../layouts/layout';
import data from '../../components/kategori/action.json';

const Main = () => (
    <main>
    {data.map((data, index) => 
        <section class="box">
            <div key={index} class="box-item">
                <img class="cover" src={data.img}/>
                <h3><a href={data.link}>{data.judul}</a></h3>
                <br/>
                <label>Genre : {data.genre}</label><br/>
                <label>Likes {data.like}</label>
            </div>
        </section>
            )}
    </main>
)

const Beranda = () =>(
    <Layout>
		<Main />
    </Layout>
   )
export default Beranda;
   