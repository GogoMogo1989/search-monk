import { createServer } from 'mirage.js';

function mockServer() {

  let server = createServer(
    {
        routes(){
            this.urlPrefix = 'http://www.devweb.com';
            this.namespace = '/v1/api';
            this.timing = 5000;

            this.get('/books', ()=>{
                return[
                    {
                        title: 'alapítvány',
                        author: 'Ashimow',
                        year: 1965
                    },
                    {
                        title: 'alapítvány és birodalom',
                        author: 'Ashimow',
                        year: 1970
                    },
                    {
                        title: 'második alapítvány',
                        author: 'Ashimow',
                        year: 1971
                    }
                ]
            })
        }
    }
  )

  return server


}

export default mockServer;