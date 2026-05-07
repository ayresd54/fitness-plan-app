// --- LOCAL STORAGE HELPERS ---
// Async wrappers for consistent usage across the app.

export async function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Storage save error:", e);
  }
}

export async function loadData(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error("Storage load error:", e);
    return null;
  }
}
