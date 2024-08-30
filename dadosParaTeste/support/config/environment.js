/*export const testConfig = {
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

        carga: {
            setTimeout: '600s',
             teardownTimeout: '600s',
            vus: 200,
            duration: '4m',
            thresholds: {
                http_req_duration: ['(95)<2000'],
                http_req_failed: ['rate<0.05']
            }
        },
        estresse: {
            setTimeout: '600s',
             teardownTimeout: '600s',
            stages: [
                {duration: '4m', target: 300},
  
            ],
            thresholds: {
                http_req_duration: ['(95)<2000'],
                http_req_failed: ['rate<0.05']
            }
        },
          
        


    }  
    
}
 */
import { Counter, Rate, Trend } from 'k6/metrics';

// Definição de métricas comuns para todos os testes
export const requestCounter = new Counter('request_counter');
export const successRate = new Rate('success_rate');
export const responseTimeTrend = new Trend('response_time_trend');

// 1. Movies

export const testConfig = {
    environment: {
        hml: {
            url: "http://localhost:3000"
        }
    },
    options: {
        smokeTresholds: {
            vus: 1, 
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.05']
            }
        },
        loadTresholdsMovies: {
            vus: 200,  
            duration: '1m40s',
            thresholds: {
                http_req_duration: ['p(95)<200'],  // 95% das requisições devem ser inferiores a 200 milissegundos
                'http_reqs{method:POST}': ['count>=100'],  // Pelo menos 100 requisições POST por segundo
                'http_req_duration{method:GET}': ['p(95)<100'],  // Requisições GET em menos de 100 milissegundos
                'http_reqs{method:PUT}': ['count>=50'],  // Pelo menos 50 requisições PUT por segundo
                'http_req_duration{method:PUT}': ['p(95)<300'],  // Atualização em menos de 300 milissegundos
                'http_reqs{method:DELETE}': ['count>=30'],  // Pelo menos 30 requisições DELETE por segundo
                'http_req_duration{method:DELETE}': ['p(95)<400'],  // Exclusão em menos de 400 milissegundos
                success_rate: ['rate>0.95'],  // Mais de 95% das requisições devem ser bem-sucedidas
            }
        },
        scalabilityTresholdsMovies: {
            stages: [
                { duration: '1m', target: 100 },
                { duration: '1m', target: 300 },
                { duration: '1m', target: 500 },
              ],
            thresholds: {
                http_req_duration: ['p(95)<200'],  // 95% das requisições devem ser inferiores a 200 milissegundos
                'http_reqs{method:POST}': ['count>=100'],  // Pelo menos 100 requisições POST por segundo
                'http_req_duration{method:GET}': ['p(95)<100'],  // Requisições GET em menos de 100 milissegundos
                'http_req_duration{method:PUT}': ['p(95)<300'],  // Atualização em menos de 300 milissegundos
                'http_reqs{method:DELETE}': ['count>=30'],  // Pelo menos 30 requisições DELETE por segundo
                'http_req_duration{method:DELETE}': ['p(95)<400'],  // Exclusão em menos de 400 milissegundos
                success_rate: ['rate>0.90'],  // Mais de 90% das requisições devem ser bem-sucedidas
            }
        
        },
        stressTresholdsMovies: {
            stages: [
              { duration: '1m20s', target: 400 },  // Aumenta para 400 usuários simultâneos
              { duration: '2m', target: 500 },  // Aumenta para 500 usuários simultâneos
            ],
            thresholds: {
                http_req_duration: ['p(95)<200'],  // 95% das requisições devem ser inferiores a 200 milissegundos
                'http_reqs{method:POST}': ['count>=100'],  // Pelo menos 100 requisições POST por segundo
                'http_req_duration{method:GET}': ['p(95)<100'],  // Requisições GET em menos de 100 milissegundos
                'http_req_duration{method:PUT}': ['p(95)<300'],  // Atualização em menos de 300 milissegundos
                'http_reqs{method:DELETE}': ['count>=30'],  // Pelo menos 30 requisições DELETE por segundo
                'http_req_duration{method:DELETE}': ['p(95)<400'],  // Exclusão em menos de 400 milissegundos
                success_rate: ['rate>0.90'],  // Mais de 90% das requisições devem ser bem-sucedidas
            }
        },
        peakTresholdsMovies: {
            stages: [
                { duration: '10s', target: 100 },  // Carga inicial estável
                { duration: '10s', target: 500 },  // Pico rápido de 500 usuários
                { duration: '20s', target: 100 },  // Retorno para 100 usuários
              ],
            thresholds: {
                http_req_duration: ['p(95)<200'],  // 95% das requisições devem ser inferiores a 200 milissegundos
                'http_reqs{method:POST}': ['count>=100'],  // Pelo menos 100 requisições POST por segundo
                'http_req_duration{method:GET}': ['p(95)<100'],  // Requisições GET em menos de 100 milissegundos
                'http_req_duration{method:PUT}': ['p(95)<300'],  // Atualização em menos de 300 milissegundos
                'http_reqs{method:DELETE}': ['count>=30'],  // Pelo menos 30 requisições DELETE por segundo
                'http_req_duration{method:DELETE}': ['p(95)<400'],  // Exclusão em menos de 400 milissegundos
                success_rate: ['rate>0.90'],  // Mais de 90% das requisições devem ser bem-sucedidas
            }
        },
        concurrencyTresholdsMovies: {
            vus: 300,
            duration: '1m40s',
            thresholds: {
                http_req_duration: ['p(95)<200'],  // 95% das requisições devem ser inferiores a 200 milissegundos
                'http_reqs{method:POST}': ['count>=100'],  // Pelo menos 100 requisições POST por segundo
                'http_req_duration{method:GET}': ['p(95)<100'],  // Requisições GET em menos de 100 milissegundos
                'http_req_duration{method:PUT}': ['p(95)<300'],  // Atualização em menos de 300 milissegundos
                'http_reqs{method:DELETE}': ['count>=30'],  // Pelo menos 30 requisições DELETE por segundo
                'http_req_duration{method:DELETE}': ['p(95)<400'],  // Exclusão em menos de 400 milissegundos
                success_rate: ['rate>0.95'],  // Mais de 95% das requisições devem ser bem-sucedidas
            }
        },
        scalabilityTresholdsMovies: {
            stages: [
                { duration: '1m', target: 100 },
                { duration: '1m', target: 300 },
                { duration: '1m', target: 500 },
              ],
            thresholds: {
                http_req_duration: ['p(95)<200'],  // 95% das requisições devem ser inferiores a 200 milissegundos
                'http_reqs{method:POST}': ['count>=100'],  // Pelo menos 100 requisições POST por segundo
                'http_req_duration{method:GET}': ['p(95)<100'],  // Requisições GET em menos de 100 milissegundos
                'http_req_duration{method:PUT}': ['p(95)<300'],  // Atualização em menos de 300 milissegundos
                'http_reqs{method:DELETE}': ['count>=30'],  // Pelo menos 30 requisições DELETE por segundo
                'http_req_duration{method:DELETE}': ['p(95)<400'],  // Exclusão em menos de 400 milissegundos
                success_rate: ['rate>0.90'],  // Mais de 90% das requisições devem ser bem-sucedidas
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 2. TICKETS

        loadTestTickets: {
            vus: 200,
            duration: '1m40s',
            thresholds: {
                http_req_duration: ['p(95)<300'],  // 95% das requisições devem ser inferiores a 300 milissegundos
                'http_reqs{method:POST}': ['count>=50'],  // Pelo menos 50 requisições POST por segundo
                success_rate: ['rate>0.95'],  // Mais de 95% das requisições devem ser bem-sucedidas
            }
        },
        stressTestTickets: {
            vus: 200,  
            duration: '1m40s',
            thresholds: {
                http_req_duration: ['p(95)<200'],  // 95% das requisições devem ser inferiores a 200 milissegundos
                'http_reqs{method:POST}': ['count>=100'],  // Pelo menos 100 requisições POST por segundo
                'http_req_duration{method:GET}': ['p(95)<100'],  // Requisições GET em menos de 100 milissegundos
                'http_reqs{method:PUT}': ['count>=50'],  // Pelo menos 50 requisições PUT por segundo
                'http_req_duration{method:PUT}': ['p(95)<300'],  // Atualização em menos de 300 milissegundos
                'http_reqs{method:DELETE}': ['count>=30'],  // Pelo menos 30 requisições DELETE por segundo
                'http_req_duration{method:DELETE}': ['p(95)<400'],  // Exclusão em menos de 400 milissegundos
                success_rate: ['rate>0.95'],  // Mais de 95% das requisições devem ser bem-sucedidas
            }
        },
        scalabilityTresholdsTickets: {
                stages: [
                    { duration: '1m20s', target: 400 },  // Aumenta para 400 usuários simultâneos
                    { duration: '2m', target: 500 },  // Aumenta para 500 usuários simultâneos
                ],
                thresholds: {
                    http_req_duration: ['p(95)<300'],  // 95% das requisições devem ser inferiores a 300 milissegundos
                    'http_reqs{method:POST}': ['count>=50'],  // Pelo menos 50 requisições POST por segundo
                    success_rate: ['rate>0.90'],  // Mais de 90% das requisições devem ser bem-sucedidas
            }
        },

        spikeTresholdsTickets: {
            stages: [
                { duration: '10s', target: 100 },
                { duration: '10s', target: 500 },
                { duration: '20s', target: 100 },
              ],
              thresholds: {
                http_req_duration: ['p(95)<300'],  // 95% das requisições devem ser inferiores a 300 milissegundos
                'http_reqs{method:POST}': ['count>=50'],  // Pelo menos 50 requisições POST por segundo
                success_rate: ['rate>0.90'],  // Mais de 90% das requisições devem ser bem-sucedidas
              }
            },
    

        capacityTresholdsTickets: {
            stages: [
                { duration: '1m', target: 50 },
                { duration: '1m', target: 200 },
                { duration: '1m', target: 500 },
            ],
            thresholds: {
                http_req_duration: ['p(95)<300'],  // 95% das requisições devem ser inferiores a 300 milissegundos
                'http_reqs{method:POST}': ['count>=50'],  // Pelo menos 50 requisições POST por segundo
                success_rate: ['rate>0.90'],  // Mais de 90% das requisições devem ser bem-sucedidas
            }
        },


        concurrencyTresholdsTickets: {
            vus: 300,
            duration: '1m40s',
            thresholds: {
                http_req_duration: ['p(95)<300'],  // 95% das requisições devem ser inferiores a 300 milissegundos
                'http_reqs{method:POST}': ['count>=50'],  // Pelo menos 50 requisições POST por segundo
                success_rate: ['rate>0.95'],  // Mais de 95% das requisições devem ser bem-sucedidas
            }
        },
        scalabilityTresholdsTickets: {
            stages: [
                { duration: '1m', target: 100 },
                { duration: '1m', target: 300 },
                { duration: '1m', target: 500 },
              ],
              thresholds: {
                http_req_duration: ['p(95)<300'],  // 95% das requisições devem ser inferiores a 300 milissegundos
                'http_reqs{method:POST}': ['count>=50'],  // Pelo menos 50 requisições POST por segundo
                success_rate: ['rate>0.90'],  // Mais de 90% das requisições devem ser bem-sucedidas
            }
        },

     }
    }