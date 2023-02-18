import type { Request, Response } from "express";
import type { Config, State } from "./src/types.js";

// @ts-ignore
import path from "sandboxed-path"; // I plan to update this eventually too to use TypeScript and support multiple sandboxes
import moreFS from "fs";
const fs = moreFS.promises;

import ipPackage from "ip";
const IP = ipPackage.address();

import express from "express";
const app = express();

const state: State = {};
let config: Config; // It'll be loaded from the disk
let PORT: number; // Loaded as part of config or from the environment variable

start();

async function start() {
	await loadConfig();

	startServer();
};
async function loadConfig() {
	config = JSON.parse(await fs.readFile(
		path.accessLocal("config.json"),
		{ encoding: "utf-8" }
	));

	PORT = process.env.PORT == null? config.port : parseInt(process.env.PORT);
};

async function startServer() {
	app.get("/info", (req: Request, res: Response) => {
		res.json({
			type: "**Insert value**"
		});
	});

	app.listen(PORT, () => {
		console.log(
			`Running on port ${PORT} using IP ${IP}.
	
For access on the same machine: http://localhost:${PORT}/
And for other devices on your LAN: http://${IP}:${PORT}/
`
		);
	});
};