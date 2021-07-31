// pages/choose/choose.js
import restaurant_api from "../../utils/restaurant_api";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        user_id: 0,
        restaurant_data: {},
        buttons_list: [
        ]
    },

    get_restaurant_data: function (user_id) {
        let that = this
        restaurant_api.get_this_restaurants(user_id).then(r => {
            that.setData({
                restaurant_data: r.data
            })
            console.log(r.data)
        })
    },
    next: function (e){
        let that = this
        let user_id = that.data.user_id
        restaurant_api.next(user_id).then(res => {
            console.log(res.data)
        })
    },
    go: function (e){
        let that = this
        let user_id = that.data.user_id
        restaurant_api.go(user_id).then(res => {
            console.log(res.data)
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let user_id = wx.getStorageSync('user_id').id;
        this.setData({
            user_id: user_id,
            button_list: [
                {name: '下一个', func: this.next}]
        })
        console.log(user_id)
        this.get_restaurant_data(user_id)
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