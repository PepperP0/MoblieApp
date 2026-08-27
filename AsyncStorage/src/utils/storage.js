import AsyncStorage from '@react-native-async-storage/async-storage';
import { PREFIX } from '../constants/keys';

export const storage = {
  async set(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('[storage.set] ล้มเหลวที่คีย์', key, e);
      return false;
    }
  },

  async get(key, fallback = null) {
    try {
      const raw = await AsyncStorage.getItem(key);
      return raw != null ? JSON.parse(raw) : fallback;
    } catch (e) {
      // ข้อมูลเสียหรือรูปแบบไม่ตรง คืนค่าตั้งต้นดีกว่าปล่อยให้แอปพัง
      console.warn('[storage.get] ล้มเหลวที่คีย์', key, e);
      return fallback;
    }
  },

  async remove(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (e) {
      console.warn('[storage.remove] ล้มเหลวที่คีย์', key, e);
      return false;
    }
  },

  async clearAppData() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const mine = keys.filter((k) => k.startsWith(PREFIX));
      if (mine.length > 0) await AsyncStorage.multiRemove(mine);
      return mine.length;
    } catch (e) {
      console.warn('[storage.clearAppData] ล้มเหลว', e);
      return 0;
    }
  },

  async debugDump() {
    const keys = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(keys);
  },
};