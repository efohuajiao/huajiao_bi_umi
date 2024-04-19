import storage from "@/utils/storage";

export default {
  namespace: 'userStore',
  state: {
    userInfo: storage.get('userStore'),
  },
  reducers: {
    setUserInfo(state:any, {userInfo}){
      storage.set('userStore', userInfo);
      return {...state, userInfo}
    }
  },

};
