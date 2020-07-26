function Header(){
	return (
		<header>
			<a href="/beranda"><img class="logo" src="/images/logo.png" alt="logo" /></a>
			<nav>
				<ul class="nav_links">
					<li><a href="/kategori/action">Action</a></li>
					<li><a href="/kategori/comedy">Comedy</a></li>
					<li><a href="/kategori/fantasy">Fantasy</a></li>
					<li><a href="/kategori/horror">Horror</a></li>
					<li><a href="/kategori/romance">Romance</a></li>
					<li><a href="/beranda">All</a></li>
				</ul>
			</nav>
			<a class="logout" href="../index"><button>Log Out</button></a>
		</header>
	);
}

export default Header;