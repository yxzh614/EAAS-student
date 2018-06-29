import axios from 'axios'
export default {
  baseURL: 'http://www.echool.cn:8081',
  fileBaseURL: 'http://www.echool.cn:8081/download',
  getYears () { // 获取共有多少届
    return axios.get('/getths')
  },
  login (data) {
    return axios.post('/checkmemberpassword', formToFormData(data))
  },
  getList () {
    return axios.get('/gettongzhi')
  },
  getListDetail (id, type) {
    return axios.get(`getjutitongzhi?id=${id}&type=${type}`)
  },
  join () {
    return axios.post()
  },
  getLeader (params) {
    return axios.get(`getmenager?th=${params}`)
  },
  getMyDetail (params) {
    return axios.get(`getmembermessage?memberId=${params}`)
  },
  updateMAC (data) {
    return axios.post('updatemac', formToFormData(data))
  },
  getGoods () {
    return axios.get('/getgoods')
  },
  editMine (data) {
    return axios.post('updatemembermes', formToFormData(data))
  },
  getCompById (params) {
    return axios.get(`someonecom?memberId=${params}`)
  },
  getMAC (params) {
    return axios.get(`getmacbymemberid?memberId=${params}`)
  },
  getTrainsById (params) {
    return axios.get(`getmembertrains?memberId=${params}`)
  },
  Join (data) {
    return axios.post('baoming', data)
  },
  changePassword (data) {
    return axios.post('/changepassword', formToFormData(data))
  }
}
axios.defaults.baseURL = 'http://www.echool.cn:8081'
function formToFormData (form) {
  let formData = new FormData()
  for (let e in form) {
    formData.append(e, form[e])
  }
  return formData
}
