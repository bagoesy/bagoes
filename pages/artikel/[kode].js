import dummyData from '../../dataset/datafile.json';
import Layout from '../../layouts/layout';

const Artikel = (props) => {
    return (
    <Layout>
    <div className="coverpage">
    <img src={props.img} height="380px" width="100%"/>
    <h1 className="title">{props.judul}</h1>
    <p>Genre : {props.genre}</p>
    <label>Likes {props.like} </label><br/><hr/>
    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
    <hr/>
    <a href="/eps/al">Baca Episode 1 </a>
    <br/>
    <br/>
    </div>
    </Layout>
    );
   }
   
export async function getStaticProps(context){
    // cari artikel berdasarkan kode yang dikirim melalui URL
    // alias parameter dynamic routing
    let kode = context.params.kode;
    let data = dummyData.find(x => x.id == kode);
    // ambil judul & isi dari data hasil pencarian
    let { img, judul, genre, like } = data;
    return {
        props : {
        // kirim judul & isi sebagai properti ke komponen utama
        img, judul, genre, like
        }
        }
    }
    export async function getStaticPaths(){
        return {
            paths : dummyData.map(data => (
            {params : {kode : `${data.id}`}}
            )),
            fallback : false
            }
           
    }
export default Artikel;
       
   