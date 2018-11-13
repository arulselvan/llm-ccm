import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.0.100:3005/api'
});