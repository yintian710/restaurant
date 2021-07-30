// app.js
App({
    data: {
        APP_ID: 'wxf0adf8708a4d89cd',//输入小程序appid
        APP_SECRET: '9acbe6e9daf96b53150f871d12b8f5e5',//输入小程序app_secret
        openId: '',
        OPEN_ID: '',
        SESSION_KEY: ''
    },
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
    },
    globalData: {
        userInfo: null
    }
})
