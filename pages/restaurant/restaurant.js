// pages/restaurant/restaurant.js
import restaurant_api from "../../utils/restaurant_api";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        restaurants_data: {},
        restaurant_data: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let user_id = wx.getStorageSync('user_id')
        console.log(user_id.id)
        let that = this
        restaurant_api.get_restaurants(user_id.id).then( res =>
            {that.setData({
                restaurants_data: res.data,
                restaurant_data: res.data.restaurant
            })
        console.log(111, res)
        console.log(that.data)}
        )


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})