export const testConfig = {
    environment: {
        hml: {
            url:"http://localhost:3000"
        }
    },
    options:{
        smokeThreshold: {
            teste: {
                setupTimeout: '600s',
                teardownTimeout: '600s',
                vus: 1,
                iterations: 1,
                thresholds: {
                    http_req_duration: ['(95)<2000'],
                    http_req_failed: ['rate<0.05']
                }
              },   
          },

          spikeThreshold: {
            stages: [
                {duration: '16s', target: 500},
                {duration: '8s', target: 0}
              ],
                thresholds: {    
                http_req_duration: ['(95)<2000'],
                http_req_failed: ['rate<0.05']
          }
        },
          
        teste: {
          smokeThreshold: {
            vus: 1, 
            duration: '1s', 
            iterations: 1,
            threshold: {
                http_req_duration: ['(95)<2000'],
                http_req_failed: ['rate<0.05']
        },
        capacityThreshold:{
            stages: [
                {duration: '2m', target: 130},
                {duration: '3m', target: 140},
                {duration: '2m', target: 0}
              ],
             thresholds: {
                http_req_failed: ['rate<0.05'],
                http_req_duration: ['p(95)<2000'], 
            },
        },
        enduranceThreshold:{
            stages: [
                {duration: '6s', target: 40},
                {duration: '6s', target: 40},
                {duration: '3s', target: 0}
              ],
             thresholds: {
                http_req_failed: ['rate<0.05'],
                http_req_duration: ['p(95)<2000'], 
            },
        },
        loadThreshold:{
            stages: [
                {duration: '6s', target: 40},
                {duration: '6s', target: 40},
                {duration: '3s', target: 0}
              ],
              thresholds: {
                http_req_failed: ['rate<0.05'],
                http_req_duration: ['p(95)<2000'], 
            },


    }  
    
}
 
}    
}
}