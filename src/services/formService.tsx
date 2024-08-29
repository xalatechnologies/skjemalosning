import axios from 'axios';

export const getForms = async () => {
  try {
    const response = await axios.get('/api/forms');
    return response.data;
  } catch (error) {
    console.error('Error fetching forms', error);
    throw error;
  }
};