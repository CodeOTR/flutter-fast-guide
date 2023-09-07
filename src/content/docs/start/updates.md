---
title: Getting Updates
description: Update you Flutter Fast version
---
## Update the CLI
Updating the Flutter Fast CLI is currently a manual process. Luckily, its fairly straightforward.
1. Download the newest version from Gumroad
2. Unzip the file and move it to the same location as the old version (replace it if asked)
3. Activate the CLI again

```
dart pub global activate --source path <path>
```

Once the CLI is updated, you can check the version by [listing your active Dart packages](https://dart.dev/tools/pub/cmd/pub-global#listing-active-packages). The package version will be next to the `flutter_fast_cli` name:

```
dart pub global list

...

flutter_fast_cli 1.0.1 at path "/Users/josephmuller/Dev/cotr/apps/flutter_fast_cli"
```