---
title: Firebase
description: Set up your Flutter Fast Firebase project
---
## Before Generating Your App
Create a new [Firebase project](https://firebase.google.com/docs/projects/learn-more).

In the Firebase Console:
1. Create a new Firestore database
2. Set up [Firebase Authentication](https://firebase.google.com/docs/auth/flutter/start) and enable email authentication (Authentication -> Sign-in method -> Native providers -> Email/Password)

## After Generating Your App
Run the flutterfire config command and select the project you just created. A `firebase_options.dart` file should be added to the lib directory. 

The Flutter Fast CLI will complete the [Flutter setup steps](https://firebase.google.com/docs/flutter/setup?platform=ios) so you won't need to touch any code. You're good to go 👍