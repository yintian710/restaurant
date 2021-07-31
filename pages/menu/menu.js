// pages/menu/menu.js
import tool from '../../utils/tool'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        buttons_list: [
            {name: '看看吃啥', url: '/pages/choose/choose'},
            {name: '我的食府', url: '/pages/restaurant/restaurant'},
            {name: '回到主页', url: '/pages/index/index'},
            {name: '测试页面', url: '/pages/test/test'},
        ]

    },

    goto: function (e) {
        let url = e.target.dataset.url
        if(url==='/pages/index/index'){
            wx.navigateBack({delta: 10})
            return
        }
        wx.navigateTo({
            url: url,
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(buttons_list)
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