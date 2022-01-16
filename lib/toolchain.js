import fs from "fs";
import path from "path"

const directory = path.join(process.cwd(), 'data');

export function getToolchainData() {
	const tools = JSON.parse(fs.readFileSync(directory + "/toolchain.json"));
	return tools;
}
