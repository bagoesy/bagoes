import Header from '../components/header';
import Footer from '../components/footer';
import Head from '../node_modules/next/head';

const Layout = (props) => (
	<div>
		<Head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<title>WebComic</title>
			<link rel="stylesheet" href="/css/style.css"/>
		</Head>
		<Header />
		{props.children}
		<Footer />
	</div>
)

export default Layout;