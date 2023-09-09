---
title: Deploy
description: Use the Flutter Fast build scripts to trigger app builds
---

## Create an Upload Keystore
Follow the instructions [here](https://docs.flutter.dev/deployment/android#signing-the-app) to create an upload keystore for your Android application.

You will need to create a `key.properties` file in the android folder since it cannot be submitted to version control:

```
storePassword=<password-from-previous-step>
keyPassword=<password-from-previous-step>
keyAlias=upload
storeFile=<keystore-file-location>
```

## Included Scripts
The Flutter Fast boiler plate comes with convenient bash scripts for building and deploying your app using Fastlane. Run configurations have also been prebuilt for each of these scripts in Android Studio and VS Code.

