import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '58a594c666b4440a835b043e23d4f1fa'
  }
})