import api from "../axios";

const useUsersApi = {
    searchProfile: async (date="Tohirabiy") => api.get(`/users/${date}`, { cache: 'force-cache' }),
    followers: async (date="Tohirabiy") => api.get(`/users/${date}/followers`),
    following: async (date="Tohirabiy") => api.get(`/users/${date}/following`),
    followers: async (date="Tohirabiy") => api.get(`/users/${date}/followers`),
    stars: async (date="Tohirabiy") => api.get(`/users/${date}/starred`),
}

export default useUsersApi;