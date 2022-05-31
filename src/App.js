import MenuUtama from './Page/MenuUtama';
import MenuProduct from './Page/MenuProduct';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuKontak from './Page/MenuKontak';

const Header = () => {
	return (
		<h1>Ini Halaman Untuk Header</h1>
	);
}

const Footer = () => {
	return (
		<h1>Ini Halaman Untuk Footer</h1>
	);
}
const App = () => {
  return (
	<div>
		<Header />
		<MenuUtama />
		<MenuProduct />
		<MenuTentangKami />
		<MenuKontak />
		<Footer />
	</div>
  );
}

export default App;
