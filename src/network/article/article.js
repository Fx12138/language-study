import { request } from "../base/request";

//根据类别获取文章
export function getArticlesByCat(categoryCode) {
    return request({
        url: '/article/getArticles',
        method: 'get',
        params: {
            categoryCode
        }
    })
}

//根据id获取文章
export function getArticleById(articleId) {
    return request({
        url: '/article/getArticlesById',
        method: 'get',
        params: {
            articleId
        }
    })
}