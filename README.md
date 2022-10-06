# Lerna

```bash
yarn add lerna -DW
```

```bash
yarn lerna init
```

```diff
# lerna.json
+{
+  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
+  "useNx": true,
+  "useWorkspaces": true,
+  "version": "0.0.0"
+}
```

```bash
npx lerna run build
```

```bash
npx lerna run test [--no-sort]
```

```bash
npx nx init
```

```diff
+{
+  "tasksRunnerOptions": {
+    "default": {
+      "runner": "nx/tasks-runners/default",
+      "options": {
+        "cacheableOperations": ["build", "test"]
+      }
+    }
+  }
+}
```

```bash
lerna run test
```

```diff
{
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build", "test"]
      }
    }
  },
+  "targetDefaults": {
+    "build": {
+      "dependsOn": {
+        "^build"
+      }
+    },
+  }
}
```
