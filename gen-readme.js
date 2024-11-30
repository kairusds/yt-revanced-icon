#!/usr/bin/env node
"use strict";

const fs = require("fs");
const patches = JSON.parse(fs.readFileSync("patches.json", "utf8"));

/**
 * Format for each package's info:
 * [
 *  "patch_name",
 *  "patch_description",
 *  boolean included_by_default,
 *  "option1_key:option1_description, option2_key:option2_description..." or null,
 *  "`versions1`, `versions2`..." or "`all`",
 *  `dependencies1`, `dependencies2`..." or "none"
 * ]
 */
let packages = {all: []};

function generatePackage(package_name, data, versions){
	let options = [];
	if(data.options && data.options.length){
		for(let option of data.options){
			options.push(`${option.key}:${option.description}`);
		}
	}

	packages[package_name].push([
		data.name,
		data.description,
		data.use,
		options.length ? options.join(", ") : null,
		versions,
		data.dependencies?.length ? data.dependencies.map(e => `\`${e}\``).join(", ") : "`none`"
	]);
}

function generatePackages(){
	patches.forEach(patch => {
		if(patch.compatiblePackages && Object.keys(patch.compatiblePackages).length){
			for(let [pkg, versions] of Object.entries(patch.compatiblePackages)){
				if (packages[pkg] === undefined) packages[pkg] = [];
				const versionList = Array.isArray(versions) && versions.length
					? versions.map(e => `\`${e}\``).join(", ")
					: "`all`";

				generatePackage(pkg, patch, versionList);
			}
		}else{
			generatePackage("all", patch, "`all`");
		}
	});
	return Promise.resolve(true);
}


// Not rewriting this function
async function generateReadme(){
	await generatePackages();
	packages = Object.fromEntries(Object.entries(packages).sort());
	let output = [];
	output.push(`# yt-revanced-icon
revanced-patches repacked with custom icons using Github Actions.
The custom icons are located in the \`custom-branding\` directory.
`);
	Object.keys(packages).forEach(pkg => {
		output.push(`## \`${pkg}\`\n\n`);
		output.push("<details>\n\n");
		for (let patch of packages[pkg]) {
			output.push(`\`${patch[0]}\`: ${patch[1]}\n\n`);
			output.push(`Target version: ${patch[4]}\n\n`);
			output.push(`Dependencies: ${patch[5]}\n\n`);
			output.push(`Included by default: \`${patch[2] ? "yes" : "no"}\`\n\n`);

			if(patch[3] != null){
				output.push("<details>\n");
				output.push("<summary>Options</summary>\n\n");
				output.push("| Key | Description |\n");
				output.push("| :---: | :---: |\n");
				for(let option of patch[3].split(", ")){
					const optinf = option.split(":");
					output.push(`| \`${optinf[0]}\` | ${optinf[1]} |\n`);
				}
				output.push("</details>\n\n");
			}
			output.push("---\n\n");
		}
		output.push("</details>");
		output.push("\n\n");
	});
	return Promise.resolve(output.join(""));
}

(async () => {
	fs.writeFileSync("README.md", await generateReadme());
})();
