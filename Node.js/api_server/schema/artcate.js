// 导入验证规则模块
const joi = require('@hapi/joi')

// 定义分类名称和别名的规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()

// 暴露添加分类名称和别名的规则
exports.add_cate_schema = {
    body: {
        name: name,
        alias
    }
}

// 暴露删除文章分类规则
exports.delete_cate_schema = {
    params:{
        id: joi.number().integer().min(1).required()
    }
}

// 获取文章分类规则
exports.get_cate_schema = {
    params:{
        id: joi.number().integer().min(1).required()
    }
}

// 更新文章分类规则
exports.update_cate_schema = {
    body:{
        id: joi.number().integer().min(1).required(),
        name,
        alias
    }
}