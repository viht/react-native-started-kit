import {
  NativeModules,
} from 'react-native';

const {
  RNDeviceInfo,
} = NativeModules;

// if (!RNDeviceInfo && Platform.OS === 'web') {
//   RNDeviceInfo = require('./web');
// }
const getUniqueID = () => RNDeviceInfo.uniqueId;
const getInstanceID = () => RNDeviceInfo.instanceId;
const getIPAddress = () => RNDeviceInfo.getIpAddress();
const getDeviceId = () => RNDeviceInfo.deviceId;
const getModel = () => RNDeviceInfo.model;
const getSerialNumber = () => RNDeviceInfo.serialNumber;
const getSystemName = () => RNDeviceInfo.systemName;
const getMACAddress = () => RNDeviceInfo.getMacAddress();
const getAPILevel = () => RNDeviceInfo.apiLevel;
const getManufacturer = () => RNDeviceInfo.systemManufacturer;
const getApplicationName = () => RNDeviceInfo.appName;
const getBrand = () => RNDeviceInfo.brand;
const getVersion = () => RNDeviceInfo.appVersion;
const getSystemVersion = () => RNDeviceInfo.systemVersion;
const getDeviceName = () => RNDeviceInfo.deviceName;
const getBundleId = () => RNDeviceInfo.bundleId;
const getDeviceLocale = () => RNDeviceInfo.deviceLocale;
const getBuildNumber = () => RNDeviceInfo.buildNumber;
const getTimezone = () => RNDeviceInfo.timezone;
const getReadableVersion = () => `${RNDeviceInfo.appVersion}.${RNDeviceInfo.buildNumber}`;
const isEmulator = () => RNDeviceInfo.isEmulator;
const getUserAgent = () => RNDeviceInfo.userAgent;
const is24Hour = () => RNDeviceInfo.is24Hour;
const getDeviceCountry = () => RNDeviceInfo.deviceCountry;
const getFirstInstallTime = () => RNDeviceInfo.firstInstallTime;
const getFontScale = () => RNDeviceInfo.fontScale;
const getLastUpdateTime = () => RNDeviceInfo.lastUpdateTime;
const isTablet = () => RNDeviceInfo.isTablet;
const getCarrier = () => RNDeviceInfo.carrier;
const isPinOrFingerprintSet = () => RNDeviceInfo.isPinOrFingerprintSet;
const getMaxMemory = () => RNDeviceInfo.maxMemory;
const getInstallReferrer = () => RNDeviceInfo.installReferrer;
const getFreeDiskStorage = () => RNDeviceInfo.freeDiskStorage;
const getPhoneNumber = () => RNDeviceInfo.phoneNumber;
const getTotalMemory = () => RNDeviceInfo.totalMemory;
const getTotalDiskCapacity = () => RNDeviceInfo.totalDiskCapacity;
const getBatteryLevel = () => RNDeviceInfo.getBatteryLevel();

const DeviceInfo = {
  getUniqueID,
  getInstanceID,
  getIPAddress,
  getDeviceId,
  getModel,
  getSerialNumber,
  getSystemName,
  getMACAddress,
  getAPILevel,
  getManufacturer,
  getApplicationName,
  getBrand,
  getVersion,
  getSystemVersion,
  getDeviceName,
  getBundleId,
  getDeviceLocale,
  getBuildNumber,
  getTimezone,
  getReadableVersion,
  isEmulator,
  getUserAgent,
  is24Hour,
  getDeviceCountry,
  getFirstInstallTime,
  getFontScale,
  getLastUpdateTime,
  isTablet,
  getCarrier,
  isPinOrFingerprintSet,
  getMaxMemory,
  getInstallReferrer,
  getFreeDiskStorage,
  getPhoneNumber,
  getTotalMemory,
  getTotalDiskCapacity,
  getBatteryLevel,
};

module.exports = DeviceInfo;
