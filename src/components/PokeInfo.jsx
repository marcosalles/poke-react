import React from 'react';

export default class PokeInfo extends React.Component {
	render() {
		const { pokemon } = this.props;

		const abilities = pokemon.abilities.map(ability => (
			<li style={styles.ability}>{ability}</li>
		));
		
		return (
			<div style={styles.container}>
				<p style={styles.types}>{pokemon.types.join(', ')}</p>
				<h1 style={styles.name}>{pokemon.name}</h1>
				<p style={styles.description}>{pokemon.description}</p>
				<div>
					<h3 style={styles.abilities}>Habilidades</h3>
					<ul style={styles.abilitiesList}>
						{abilities}
					</ul>
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		padding: '1.2em',
	},
	types: {
		color: '#fff',
		letterSpacing: '0.63em',
		textTransform: 'uppercase',
	},
	name: {
		fontFamily: 'sans-serif',
		color: '#f8d41f',
		textTransform: 'uppercase',
	},
	description: {
		color: '#fff',
	},
	abilities: {
		color: '#f8d41f',
	},
	abilitiesList: {
		listStyleType: 'none',

	},
	ability: {
		color: '#fff',
	},
};