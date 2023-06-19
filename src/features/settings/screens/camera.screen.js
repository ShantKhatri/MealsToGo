import { Camera, CameraType } from "expo-camera";
import React, { useEffect, useRef, useState, useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { styled } from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;
export const CameraScreen = ({ navigation }) => {
  //   const [type, setType] = useState(CameraType.front);
  const [hasPermission, setHasPermission] = useState(false);
  //   const toggleCameraType = () => {
  //     setType((current) =>
  //       current === CameraType.back ? CameraType.front : CameraType.back
  //     );
  //   };
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to Camera</Text>;
  }
  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={CameraType.front}
      ratio="16:9"
    >
      <TouchableOpacity onPress={snap}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
  );
};
