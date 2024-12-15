install:
	npm ci

gendiff:
	bin/gendiff.js

test:
	npm run test

test-coverage:
	npm run test -- --coverage --coverageProvider=v8

lint:
	npm run lint

link:
	npm link

stylish:
	gendiff __fixtures__/file1.json __fixtures__/file2.json -f stylish

plain:
	gendiff __fixtures__/file1.json __fixtures__/file2.json -f plain

json:
	gendiff __fixtures__/file1.json __fixtures__/file2.json -f json
