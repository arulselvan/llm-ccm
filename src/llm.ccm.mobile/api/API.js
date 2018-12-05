import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.0.102:3005/api'
  //baseURL: 'http://ccm.arulselvan.net/api'
});