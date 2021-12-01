import axios from "axios";

//第二种采用promise的方式
export function request(config) {

  return new Promise((resolve, reject) => {

    //1.创建axios实例
    const axios1 = axios.create({
      baseURL: '/api',
      timeout: 5000
    })

    return axios1(config)

  })

}