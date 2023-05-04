// 导入定义验证规则的包
const joi = require('@hapi/joi')

// 定义注册 用户名和密码验证规则
const username = joi.string().alphanum().min(4).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// 定义 id, nickname, emial 的验证规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()

// 定义用户头像验证规则
const avatar = joi.string().dataUri().required()


// 暴露注册和登录表单的验证规则对象
exports.reg_login_schema = {
    body: {
        username,
        password
    }
}

// 暴露更新用户信息的验证规则对象
exports.update_userInfo_schema = {
    body: {
        id: id,
        nickname: nickname,
        email: email
    }
}

// 暴露更改密码验证规则
exports.update_password_schema = {
    body: {
        oldPwd: password,
        newPwd: joi.not(joi.ref('oldPwd')).concat(password),
    }
}

// 暴露头像验证规则
exports.update_avatar_schema = {
    body: {
        avatar: avatar
    }
}