import AsyncStorage from '@react-native-async-storage/async-storage';

interface saveUserType {
  userId: string;
}

export const persistUserId = async (payload: saveUserType) => {
  try {
    await AsyncStorage.setItem('@user', JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
};

export const getPersistedUserId = async () => {
  try {
    const data: any = await AsyncStorage.getItem('@user');
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const removePersistUserId = async () => {
  try {
    await AsyncStorage.removeItem('@user');
    return true;
  } catch {
    return false;
  }
};
