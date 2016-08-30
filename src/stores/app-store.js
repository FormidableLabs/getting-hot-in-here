import { observable } from 'mobx';

class AppStore {
  @observable token = `I'm coming from MobX`;
  updateToken(token) {
    this.token = token;
  }
}

export default AppStore;
