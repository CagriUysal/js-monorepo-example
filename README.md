# Yarn Workspaces

```diff
# in package.json
{
  "name": "monorepo-starter",
  "version": "1.0.0",
+ "private": "true",
+ "workspaces": [
+  "packages/*"
+  ],
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "clean:modules": "rimraf \"./**/node_modules\"",
    "clean:dist": "rimraf \"./**/dist\"",
    "clean": "yarn clean:modules && yarn clean:dist"
  },
  "devDependencies": {
    "rimraf": "^3.0.2"
  }
}
```

```bash
# install all packages in optimized way and link local packages
yarn install
```
