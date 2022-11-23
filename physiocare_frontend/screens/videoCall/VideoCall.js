import React, { useEffect } from "react";
import { Text } from "react-native";
import { WebView } from "react-native-webview";
import { Camera } from "expo-camera";

const VideoPage = ({ navigation, route }) => {
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
