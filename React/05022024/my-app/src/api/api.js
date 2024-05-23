import axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/';

const instanse = axios.create({
      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/',
      // headers: {
      //   "API-KEY": "99fb1b90-d1bc-4679-8e89-8a2bf40eeb70"
      // }
})

export const usersAPI = {
  getUsers(currentPage=1, pageSize=10) {
    return instanse.get(`1.0/users?page=${currentPage}&count=${pageSize}`,)
      .then(response => {
        return response.data
      });
  }
}




