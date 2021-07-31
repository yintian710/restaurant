import _http from '_http.js'
// 获取商品的一级分类,不需要参数
const app = getApp();
const get_restaurants = (user_id) => {
    console.log(user_id + '执行了 获取食府数据');
    return _http({
        url: '/restaurants/all',
        data: {
            user_id: user_id
        }
    })
};
const get_this_restaurants = (user_id) => {
    console.log(user_id + '执行了 获取当前食府数据');
    return _http({
        url: '/restaurants/this',
        data: {
            user_id: user_id
        }
    })
};
const next = (user_id) => {
    console.log(user_id + '执行了 next');
    return _http({
        url: '/restaurants/next',
        data: {
            user_id: user_id
        }
    })
};
const go = (user_id) => {
    console.log(user_id + '执行了 go');
    return _http({
        url: '/restaurants/go',
        data: {
            user_id: user_id
        }
    })
};

export default {
    get_restaurants, get_this_restaurants, next, go,
}