export const API_URL_ROOT = "https://www.reddit.com/r";

export async function get(url) {
  return await fetch(`${API_URL_ROOT}/${url}`);
}
