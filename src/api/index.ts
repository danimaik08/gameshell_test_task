import { action, observable, runInAction } from 'mobx';
import axios from 'axios';
// import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
// Sadly, npm registry temporary IS DEAD. (Sun 8 Dec 21:38 Moscow)
// But if I get hired in your company, I'll bring it back, BIGGER, BETTER and STRONGER then ever before!

import * as types from './types';

const getData = () => {
  return axios.get<types.GetResponse>(
    'https://www.cbr-xml-daily.ru/daily_json.js'
  );
};

class Api {
  @observable accessor data: types.GetResponse;
  @observable accessor isLoading: boolean;

  @action getResponseAction() {
    this.isLoading = true;

    getData()
      .then((res) => {
        runInAction(() => {
          this.data = res.data;
        });
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}

const api = new Api();

export default api;
