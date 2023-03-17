import fs from 'fs'
import Handlebars from 'handlebars'
import orgDataExample from './data.example.js'

// Paths
const basePath = '.'
const pathProfile = `${basePath}/profile`
const pathPublic = `${pathProfile}/public`
const pathPublicData = `${pathPublic}/data`
const pathSrcTemplates = `${basePath}/src/templates`

// The data to be used in the templates
const data = process.env.ORG_DATA || orgDataExample

// HBS Functions
export function hbsTemplateCompile(templateFile = 'profile/README.md.hbs') {
	let source = fs.readFileSync(`${pathSrcTemplates}/${templateFile}`, 'utf8')
	return Handlebars.compile(source)(data)
}

export function hbs(templateFile = 'profile/README.md', distFolder = basePath) {
	fs.writeFileSync(`${distFolder}/${templateFile}`, hbsTemplateCompile(`${templateFile}.hbs`))
}

// Generate the public .json files
fs.writeFileSync(`${pathPublicData}/github.json`, JSON.stringify(data, null, 2))

// Generate the public profile README.md file
hbs('profile/README.md')
hbs('profile/public/humans.txt')
