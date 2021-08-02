// pages/choose/choose.js
import restaurant_api from "../../utils/restaurant_api";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        user_id: 0,
        food: '',
        restaurant_data: {},
        buttons_list: [
        ],
        food_list: []
    },

    get_restaurant_data: function (user_id) {
        let that = this
        restaurant_api.get_this_restaurants(user_id).then(r => {
            that.setData({
                restaurant_data: r.data,
                food: r.data.go,
                food_list: r.data.food

            })
            console.log(r.data)
        })
    },
    next: function (e){
        let that = this
        let user_id = that.data.user_id
        let food = ''
        restaurant_api.next(user_id).then(res => {
            console.log(res.data)
            food = res.data.food
            console.log(food, '-----------')
            for(let i = 0; i<80; i++){
                this.sleep(30)
                this.fake_random()
            }
            that.setData({
                food: food
            })
        })
        // for(let i = 0; i<80; i++){
        //     this.sleep(30)
        //     this.fake_random()
        // }
        that.setData({
            food: food
        })
    },
    go: function (e){
        let that = this
        let user_id = that.data.user_id
        restaurant_api.go(user_id).then(res => {
            console.log(res.data)
            let food = res.data.food
            wx.setStorageSync('food', food);
            console.log(1, food)
        })
    },
    sleep: function (n) {
    var start = new Date().getTime();
    //  console.log('休眠前：' + start);
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
    // console.log('休眠后：' + new Date().getTime());
},

    fake_random: function (){
        let food_list = this.data.food_list
        food_list = Object.keys(food_list)
        // console.log(111, food_list)
        var food = food_list[Math.floor(Math.random() * food_list.length)];
        // console.log(222, food);
        this.setData({
            food: food
        })

    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let user_id = wx.getStorageSync('user_id').id;
        let food = wx.getStorageSync('food')
        this.setData({
            user_id: user_id,
            food: food
        })
        console.log(this.data)
        this.get_restaurant_data()
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