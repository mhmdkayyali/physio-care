import React, { useEffect } from "react";
import { Text } from "react-native";
import { WebView } from "react-native-webview";
import { Camera } from "expo-camera";

const VideoPage = ({ navigation, route }) => {
  const meetingId = route?.params?.meetingId ?? "123";
  const name = route?.params?.name.split(" ")[0] ?? "Unknown";
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
      incognito={true}
      allowsInlineMediaPlayback
      javaScriptEnabled
      scalesPageToFit
      mediaPlaybackRequiresUserAction={true}
      javaScriptEnabledAndroid
      useWebkit
      startInLoadingState={true}
      source={{
        uri: `http://192.168.43.32:3000/video?meetingId=123123&name=name`,
      }}
    />
  );
};
