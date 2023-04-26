// $(function() {
//     load();
//     $("#title").on("keydown", function(event) {
//         if (event.keyCode === 13) {
//             if ($(this).val() === "") {
//                 alert("请输入您要的操作");
//             } else {
//                 var local = getDate();
//                 local.push({ title: $(this).val(), done: false });
//                 saveDate(local);
//                 load();
//                 $(this).val("");
//             }
//         }
//     });
//     $("ol, ul").on("click", "a", function() {
//         var data = getDate();
//         var index = $(this).attr("id");
//         data.splice(index, 1);
//         saveDate(data);
//         load();
//     });
//     $("ol, ul").on("click", "input", function() {
//         var data = getDate();
//         var index = $(this).siblings("a").attr("id");
//         data[index].done = $(this).prop("checked");
//         saveDate(data);
//         load();
//     });
//     function getDate() {
//         var data = localStorage.getItem("todolist");
//         if (data !== null) {
//             return JSON.parse(data);
//         } else {
//             return [];
//         }
//     }
//     function saveDate(data) {
//         localStorage.setItem("todolist", JSON.stringify(data));
//     }
//     function load() {
//         var data = getDate();
//         $("ol, ul").empty();
//         var todoCount = 0;
//         var doneCount = 0;
//         $.each(data, function(i, n) {
//             if (n.done) {
//                 $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
//                 doneCount++;
//             } else {
//                 $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
//                 todoCount++;
//             }
//         });
//         $("#todocount").text(todoCount);
//         $("#donecount").text(doneCount);
//     }
// })

$(function(){
    const data = JSON.parse( localStorage.getItem('todo'))
    // 用户输入业务
    $('#title').on('keyup',function(e){
        if(e.keyCode === 13){
            data.push({text: $(this).val(), done: false})
           render()
           $(this).val('')  
        }
    })
    // 删除业务
    $('#todolist, #donelist').on('click', 'a',function(){
        data.splice($(this).attr('id'),1)
        render()
    })
    // 小复选框业务
    $('#todolist, #donelist').on('change', 'input',function(){
        data[$(this).siblings('a').attr('id')].done === true ? data[$(this).siblings('a').attr('id')].done = false : data[$(this).siblings('a').attr('id')].done = true
        render()
    })
    // 渲染函数
    render()
    function render (){
        localStorage.setItem('todo', JSON.stringify(data))
        const renderdata =JSON.parse( localStorage.getItem('todo'))
        let todocount = 0
        let donecount = 0
        $('#todolist, #donelist').empty()
        $.each(renderdata,function(i,ele){
            if(ele.done === false){
                todocount++
                $('#todolist').prepend('<li><input type="checkbox" /><p>'+ele.text+'</p><a href="javascript:;" id='+i+'></a></li>')                
            }else{
                donecount++
                $('#donelist').prepend('<li><input type="checkbox" checked /><p>'+ele.text+'</p><a href="javascript:;" id='+i+'></a></li>')
            }  
        })
        $('#todocount').html(todocount)
        $('#donecount').html(donecount)
    }
})
