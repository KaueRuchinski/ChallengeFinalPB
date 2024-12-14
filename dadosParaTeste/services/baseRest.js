import http from "k6/http";
import { BaseService } from "./baseService.js";
import { ENDPOINTS } from "../support/base/constants.js";

export class BaseRest extends BaseService {
    constructor(base_uri) {
        super(base_uri);
    }

    post(endpoint, body, headers = {}, params = {}) {
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(headers, params);
        return http.post(uri, JSON.stringify(body), options);
    }

    get(endpoint, headers = {}, params = {}) {
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(headers, params);
        return http.get(uri, options);
    }

    del(endpoint, headers = {}, params = {}) {
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(headers, params);
        return http.del(uri, options);
    }

    buildOptions(headers = {}, params = {}) {
        return {
            headers: Object.assign({'Content-Type': 'application/json'}, headers),
            params: Object.assign({}, params)   
        };
    }

    deleteAllMovies(base_uri){

        const baseRest = new BaseRest(base_uri);

        const res = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
        let movies = JSON.parse(res.body);
        movies.forEach(movie => {
            let deleteRes = baseRest.del(ENDPOINTS.MOVIES_ENDPOINT, movie._id, null);
        });
    }


}
