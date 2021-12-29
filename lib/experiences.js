import fs from "fs";
import path from "path"

const directory = path.join(process.cwd(), 'data');

export function getExperiencesData() {
	const exps = JSON.parse(fs.readFileSync(directory + "/experiences.json"));
	return exps;
}
