import { request } from "../base/request";

export function getArticlesByCat(categoryCode) {
    return request({
        url: '/article/getArticles',
        method: 'get',
        params: {
            categoryCode
        }
    })
}