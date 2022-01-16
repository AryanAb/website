import fs from "fs";
import path from "path"

const directory = path.join(process.cwd(), 'data');

export function getSelectedProjectsData() {
	const projs = JSON.parse(fs.readFileSync(directory + "/projects.json"));

	if (projs.projects.length > 4) {
		return { projects: projs.slice(0, 5) };
	}

	return projs;
}
