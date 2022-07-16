import * as request from 'supertest';

// const 
const HEAD_CONTENT_TYPE = 'application/json';
const HEAD_ACCEPT_TYPE = 'application/json';
const USER_AGENT = '86400 API Testing Client';

export abstract class HttpClient {

    public requestAgent: request.SuperTest<request.Test>;
    public baseUrl = '';
    protected headInfo;

    constructor(baseUrl: string) {
        this.requestAgent = request.agent(baseUrl);
        this.headInfo = {
            'Content-Type': HEAD_CONTENT_TYPE,
            'Accept': HEAD_ACCEPT_TYPE,
            'User-Agent': USER_AGENT,
        };
        this.baseUrl = baseUrl;
    }

    protected initRequestHeader(requestItem: request.Test) {
        for (const [name, value] of Object.entries(this.headInfo)) {
            requestItem.set(name, String(value));
        }
        return requestItem;
    }

    async put(url: string, data: {} = {}) {
        if (url.trim()) {
            return await this.initRequestHeader(this.requestAgent.put(url).send(data));
        }

    }

    async post(url: string, data: {} = {}) {
        if (url.trim()) {
            return await this.initRequestHeader(this.requestAgent.post(url).send(data));
        }
    }

    async get(url: string = '') {
        return await this.initRequestHeader(this.requestAgent.get(url));
    }

    async delete(url: string) {
        if (url.trim()) {
            return await this.initRequestHeader(this.requestAgent.delete(url));
        }
    }

    async head(url: string) {
        if (url.trim()) {
            return await this.initRequestHeader(this.requestAgent.head(url));
        }

    }

    async options(url: string) {
        if (url.trim()) {
            return this.requestAgent.options(url).set('User-Agent', USER_AGENT);
        }
    }

    addNewHeadInfo = (key: string, value: string) => {
        if (key.trim()) {
            this.headInfo[key] = value;
        }
    }
}