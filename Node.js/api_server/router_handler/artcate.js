// 导入数据库对象
const db = require('../db/index')

// 获取文章分类列表函数
exports.getArticleCate = (req, res) => {

    // 定义 sql 语句
    const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'

    db.query(sql, (err, results) => {

        if(err) return res.cc(err)

        res.send({
            status: 0,
            mseeage: '获取文章分类列表成功',
            data: results
        })
    })
}

// 新增文章分类函数
exports.addArticleCate = (req, res) => {

    // 定义分类名称和别名 sql 查询语句
    const sql = 'select * from ev_article_cate where name=? or alias=?'

    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        
        if(err) return res.cc(err)
        
        if(results.length === 2) return res.cc('分类名称、分类别名都已经被占用， 请更换一个再试试')

        if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称与别名被占用，请更换后重试！')

        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')

        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')

        // 定义新增分类名称和别名的 sql 语句
        const sql = 'insert into ev_article_cate (name, alias) values (?, ?)'

        db.query(sql, [req.body.name, req.body.alias], (err, results) => {

            if(err) return res.cc(err)

            if(results.affectedRows !== 1) return res.cc('添加失败，请稍后再试')

            res.send({
                status: 0,
                message: '新增文章分类成功'
            })
        })
    })
    
}

// 删除文章分类
exports.deleteArticleCate = (req, res) => {

    // 判断用户删除权限
    if(req.params.id === '1' || req.params.id === '2') return res.cc('您没有删除权限')
    
    // 定义删除文章分类 sql 语句
    const sql = 'update ev_article_cate set is_delete=1 where id=?'

    db.query(sql, [req.params.id], (err, results) => {

        if(err) return res.cc(err)

        if(results.affectedRows !== 1) return res.cc('删除文章分类失败，请稍后再试')

        res.cc('删除文章分类成功', 0)

    })
    
}

// 根据 id 获取文章分类列表
exports.getIdArticleCate = (req, res) => {
    
    // 定义 sql 语句
    const sql = 'select * from ev_article_cate where id=?'
    
    db.query(sql, [req.params.id], (err, results) => {

        if(err) return res.cc(err)

        if(results.length === 0) return res.cc('获取信息失败，请稍后再试')

        res.send({
            status: 0,
            message: '获取文章分类数据成功！',
            date: results[0]
        })
    })
}

// 根据 id 更新文章分类列表
exports.updateArticleCate = (req, res) => {

    // 定义查重 sql 语句
       const sql = "select * from ev_article_cate where id<>? and (name=? || alias=?)"

       db.query(sql, [req.body.id, req.body.name, req.body.alias], (err, results) => {

        if(err) return res.cc(err)

        if(results.length === 2) return res.cc('分类名称和分类别名已经被占用，请更改后重试')

        if(results.length === 1 && req.body.name === results[0].name && req.body.alias === results[0].alias) return res.cc('分类名称和分类别名已经被占用，请更改后重试')
        
        if(results.length === 1 && req.body.name === results[0].name) return res.cc('分类名称已经被占用，请更改后重试')
        
        if(results.length === 1 && req.body.alias === results[0].alias) return res.cc('分类别名已经被占用，请更改后重试')
        // 定义 sql 更新语句
        const sql = 'update ev_article_cate set name=?,alias=? where id=?'

        db.query(sql, [req.body.name, req.body.alias, req.body.id], (err, results) => {
            
            if(err) return res.cc(err)
                
            if(results.affectedRows !== 1) return res.cc('更新失败，请稍后再试')

            res.send({
                status: 0,
                message: '更新文章分类成功'
            })
        })   
        
       }) 
}