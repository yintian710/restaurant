import http from 'http.js' //引入上面封装好的请求方法
import _http from '_http.js'
// 获取商品的一级分类，不需要参数
const app = getApp();
const get_restaurants = (user_id) => {
    console.log(user_id + '执行了 获取积分');
    return http({
        url: '/restaurants/all',
        data: {
            user_id: user_id
        }
    })
};

export default {
    get_restaurants,
}