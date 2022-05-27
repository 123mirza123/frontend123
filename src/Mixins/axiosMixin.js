import axios from 'axios';

export const axiosMixin = {
    data() {
      return {
        
      };
      
    },

    methods: {

        callApi: async function( method, url, data ) {
            return await axios({
                method: method,
                url: url,
                data: data
            });
        }
    }

  };