import React, { useEffect } from "react";
import { WebView } from "react-native-webview";
import { Camera } from "expo-camera";

const VideoPage = ({ navigation, route }) => {
  const meetingId = route?.params?.meetingId ?? "123";
  const meeting = route?.params?.meeting ?? "123";
  console.log(meetingId);
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      const { status: micStatus } =
        await Camera.requestMicrophonePermissionsAsync();
    })();
  }, []);

  return (
    <WebView
      originWhitelist={["*"]}
      allowsInlineMediaPlayback
      javaScriptEnabled
      scalesPageToFit
      mediaPlaybackRequiresUserAction={true}
      javaScriptEnabledAndroid
      useWebkit
      startInLoadingState={true}
      source={{
        uri: meeting,
      }}
    />
  );
};

export default VideoPage;
