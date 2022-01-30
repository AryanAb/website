import fs from "fs";
import path from "path"

const directory = path.join(process.cwd(), 'data');

export function getProjectsData() {
	const projs = JSON.parse(fs.readFileSync(directory + "/projects.json"));

	return projs;
}
