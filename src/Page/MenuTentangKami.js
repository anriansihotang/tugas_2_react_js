import React, { Component } from 'react';

class MenuTentangKami extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tentang: "Warung Nusantara Adalah Yang Bernuasa Makanan Nusantara, Kami Ada Untuk Anda Menikmati Makanan Khas Dari Nusantara"
		};
	}
	render() {
		return (
		<div>
			<center>
				<p>Tentang Kami</p> {this.state.tentang}
			</center>
		</div>
		);
	}
}

export default MenuTentangKami; 