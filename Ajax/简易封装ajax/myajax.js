// myAjax({
//     method: "GET",
//     url: "http://www.liulongbin.top:3006/api/getbooks",
//     data: {
//       id: 1,
//     },
//     success: function (res) {
//       console.log(res);
//     },
//   });

// 1.data参数处理函数
function resolveData (data){
    const arr = []
    for(let k in data){
        arr.push(k + '=' + data[k])
    }
    return arr.join('&')
}
// const res = resolveData({name: '张三', age: 18})
// console.log(res);
// 2.定义myAjax函数
function myAjax (options) {

    // 创建xhr对象
    const xhr = new XMLHttpRequest()

    // 拼接查询字符串
    const qs = resolveData(options.data)

    // 判断请求的类型
    if(options.method.toUpperCase() === 'GET'){
        // 发起GET请求
        xhr.open('GET', options.url + '?' + qs)
        xhr.send()
    }else if(options.method.toUpperCase() === 'POST'){
        // 发起POST请求
        xhr.open('POST', options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }

    // 监听请求状态改变的事件
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status ===200){
            const res = JSON.parse(xhr.responseText)
            options.success(res)
        }
    }

}
