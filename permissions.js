// src/core/permissions.js

import * as Location from 'expo-location';
import * as Camera from 'expo-camera';

export async function requestLocationPermission() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  return status === 'granted';
}

export async function requestCameraPermission() {
  const { status } = await Camera.requestCameraPermissionsAsync();
  return status === 'granted';
}