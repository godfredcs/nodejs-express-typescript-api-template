"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractService {
    constructor() {
    }
    all(params) {
        return [
            {
                name: 'user name',
            }
        ];
    }
    store(data) {
        return {
            name: 'user name',
        };
    }
}
exports.default = AbstractService;
