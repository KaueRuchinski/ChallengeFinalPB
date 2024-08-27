import { sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, productGenerate, userAdmGenerate } from '../../../support/base/baseTest.js';

export let options = {
    vus: 10, 
    duration: '5s', 
};

const baseURL = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURL);
const baseChecks = new BaseChecks();

export default function () {
    // Criar usuário adm
    const userAdm = userAdmGenerate();
    const userRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, userAdm);
    baseChecks.checkStatusCode(userRes, 201);

    const userId = userRes.json()._id;

    // Fazer login
    const loginPayload = {
        email: userAdm.email,
        password: userAdm.password
    };
    const loginRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, loginPayload);
    baseChecks.checkStatusCode(loginRes, 200);

    const token = loginRes.json().authorization;

    // Criar produto
    const productPayload = productGenerate();
    const productRes = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, productPayload, { Authorization: token });
    baseChecks.checkStatusCode(productRes, 201);

    const prodId = productRes.json()._id;

    // Verifica se o produto foi criado
    if (!prodId) {
        throw new Error("Produto não foi criado");
    }
    console.log(`Produto criado com sucesso. ID: ${prodId}`);

    // Confirmar a criação do produto
    const getProductRes = baseRest.get(`${ENDPOINTS.PRODUCTS_ENDPOINT}/${prodId}`, { Authorization: token });
    baseChecks.checkStatusCode(getProductRes, 200);
    console.log(`Produto recuperado com sucesso. Resposta: ${JSON.stringify(getProductRes.json())}`);

    const payload = {
        produtos: [{
            idProduto: prodId,
            quantidade: 1
        }]
    };

    // Criar carrinho
    const cartRes = baseRest.post(ENDPOINTS.CARTS_ENDPOINT, payload, { Authorization: token });
    baseChecks.checkStatusCode(cartRes, 201);
    console.log(`Carrinho criado com sucesso. Resposta: ${JSON.stringify(cartRes.json())}`);

    // Confirmar a criação do carrinho
    const cartId = cartRes.json()._id;
    const getCartRes = baseRest.get(`${ENDPOINTS.CARTS_ENDPOINT}/${cartId}`, { Authorization: token });
    baseChecks.checkStatusCode(getCartRes, 200);
    console.log(`Carrinho recuperado com sucesso. Resposta: ${JSON.stringify(getCartRes.json())}`);

    // Deletar carrinho
    const deleteCartRes = baseRest.del(`${ENDPOINTS.CARTS_ENDPOINT}/${cartId}`, null, { Authorization: token });
    baseChecks.checkStatusCode(deleteCartRes, 200);
    console.log(`Carrinho deletado com sucesso. Resposta: ${JSON.stringify(deleteCartRes.json())}`);

    // Confirmar a exclusão do carrinho
    const getDeletedCartRes = baseRest.get(`${ENDPOINTS.CARTS_ENDPOINT}/${cartId}`, { Authorization: token });
    baseChecks.checkStatusCode(getDeletedCartRes, 404);
    console.log(`Verificação da exclusão do carrinho. Resposta: ${JSON.stringify(getDeletedCartRes.json())}`);

    // Excluir produto
    const deleteProductRes = baseRest.del(ENDPOINTS.PRODUCTS_ENDPOINT, prodId, { Authorization: token });
    baseChecks.checkStatusCode(deleteProductRes, 200);
    console.log(`Produto deletado com sucesso. Resposta: ${JSON.stringify(deleteProductRes.json())}`);

    // Confirmar a exclusão do produto
    const getDeletedProductRes = baseRest.get(`${ENDPOINTS.PRODUCTS_ENDPOINT}/${prodId}`, { Authorization: token });
    baseChecks.checkStatusCode(getDeletedProductRes, 404);
    console.log(`Verificação da exclusão do produto. Resposta: ${JSON.stringify(getDeletedProductRes.json())}`);

    // Excluir usuário
    const deleteUserRes = baseRest.del(ENDPOINTS.USER_ENDPOINT, userId, { Authorization: token });
    baseChecks.checkStatusCode(deleteUserRes, 200);
    console.log(`Usuário deletado com sucesso. Resposta: ${JSON.stringify(deleteUserRes.json())}`);

    sleep(1); 
}

export function handleSummary(data) {
    return {
        'fluxo.html': htmlReport(data),
    };
}
