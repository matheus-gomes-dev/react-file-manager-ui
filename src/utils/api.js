import axios from 'axios';

const APIURL = 'http://localhost:5000/uploads';

const api = {
  uploadFile: async (fileName, file) => {
    try {
      const formData = new FormData();
      formData.append('fileName', fileName);
      formData.append('file', file);
      const result = await axios.post(
        APIURL,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' }}
      );
      return result;
    } catch (error) {
      console.error(error);
      return;
    }
  },
  getUploads: async () => {
    try {
      const result = await axios.get(APIURL);
      return result;
    } catch (error) {
      console.error(error);
      return;
    }
  },
  getUploadById: async (id) => {
    try {
      const result = await axios.get(`${APIURL}/${id}`);
      return result;
    } catch (error) {
      console.error(error);
      return;
    }
  }
};

export default api;
