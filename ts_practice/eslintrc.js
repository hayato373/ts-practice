module.export = {
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier/@typescript-eslint"
	],
	"plugins":[
		"@typescript-eslint"
	],
	"parser": "@typescript-eslint/parser",
	"env": { "browser": true, "node": true, "es6": true },
	"parserOptions": {
		"sourceType": "module",
		"project": "./tsconfig.json"
	},
	"rules": {

	}
}
