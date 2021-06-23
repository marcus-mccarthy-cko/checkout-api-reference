import { Checkout } from 'checkout-node-sdk';

const cko = new Checkout('sk_XXXX');

try {
	const instrument = await cko.instruments.create({
		// infered type "token",
		token: 'tok_bzi43qc6jeee5mmnfo4gnsnera', // Generated by Checkout.Frames
	});
} catch (err) {
	console.log(err.name);
}
