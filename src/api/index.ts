import { action, makeAutoObservable } from 'mobx';
import axios from 'axios';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

import * as types from './types';

const getData = () => {
  return axios
    .get<types.GetResponse>('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((res) => res.data);
};

class Api {
  data: IPromiseBasedObservable<types.GetResponse>;

  constructor() {
    makeAutoObservable(this);
  }

  @action getResponseAction() {
    this.data = fromPromise(getData());
  }
}

const api = new Api();

export default api;
