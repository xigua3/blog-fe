import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {users} from './data/user'

export default {
  init() {
    let mock = new MockAdapter(axios);


    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })

    mock.onPost('/user/login').reply(config => {

      let {
        username,
        password
      } = JSON.parse(config.data);
      return new Promise((resolve, reject) => {

        let user = null;
        setTimeout(() => {

          let hasUser = users.some(person => {

            if (person.username === username && person.password === password) {
              user = JSON.parse(JSON.stringify(person));
              user.password = undefined;
              return true;
            } else {
              return false
            }
          });
          if (hasUser) {
            resolve([200, {
              code: 200,
              msg: '登录成功',
              user
            }]);
          } else {
            resolve([200, {
              code: 500,
              msg: '账号错误'
            }])
          }
        }, 500);
      })
    });
  }
}
