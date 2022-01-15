import fs from "fs";
import path from "path"

const directory = path.join(process.cwd(), 'data');

export function getToolchainData() {
	const exps = JSON.parse(fs.readFileSync(directory + "/toolchain.json"));
	return exps;
}
