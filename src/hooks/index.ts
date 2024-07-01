export async function useGetUserTodos() {
  const api = import.meta.env.VITE_API_DEV_URL;
  const response = await fetch(`${api}/user`);
  const data = await response.json();
  return data;
}
