// This does not work
const { Writable } = require('node:stream');

// This works
// import { Writable } from "node:stream";

const myStream = new Writable();

export default {
	async fetch(request) {
		return new Response("hello");
	},
};
