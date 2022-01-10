import { request } from "../base/request";

//根据文章id获取评论
export function getCommentsById(articleId) {
    return request({
        url: '/comment/comment',
        method: 'get',
        params: {
            articleId
        }
    })
}

//发布评论
export function pubComment(content, articleId, fromUser) {
    return request({
        url: '/comment/comment',
        method: 'post',
        data: {
            content, articleId, fromUser
        }
    })
}