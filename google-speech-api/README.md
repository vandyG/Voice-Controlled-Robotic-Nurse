# google-speech-api
node.js application for speech recognition using Google Cloud Speech API

# Setting up

This application when deployed to Google App Engine will automatically authenticate to Google Firebase services like Realtime Database and Storage. However Google Cloud Messaging needs explicitly defining its API key. The API key is passed to application as env variable which is defined in `app.yaml`. The following commands allow you to update `app.yaml` env variable to a value which is stored in `$GCM_SERVER_KEY`.

```
$ GCM_SERVER_KEY=AAA
$ sed -i  "s/GCM_SERVER_KEY:\(.*\)/GCM_SERVER_KEY: $GCM_SERVER_KEY/" app.yaml
```
