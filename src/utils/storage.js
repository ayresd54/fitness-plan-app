// --- STORAGE ENGINE ---
// Simple async save/load wrappers using localStorage (web)
// or AsyncStorage (React Native). This version uses web storage.

export async function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Save error:", err);
  }
}

export async function loadData(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.error("Load error:", err);
    return null;
  }
}
