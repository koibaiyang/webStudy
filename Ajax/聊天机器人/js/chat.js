$(function(){
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()
    // 发送信息
    $('#sendmsg').on('click',function(){
        const text = $('#ipt').val().trim()
        if(text.length <=0 ) return $('#ipt').val('')
        $('.talk_list').append(' <li class="right_word"><img src="img/person02.png" /> <span>'+$('#ipt').val()+'</span></li>')
        $('#ipt').val('')
        resetui() 
        getMsg(text)   
    })
    // 请求机器人响应消息
    function getMsg (text){
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: function(msg){
                if(msg.message === 'success'){
                    const tx = msg.data.info.text
                    // console.log(tx);
                    $('.talk_list').append(' <li class="left_word"><img src="img/person01.png" /> <span>'+tx+'</span></li>')
                    resetui()
                    getVoice(tx)
                }               
            }
        })
    }
    // tx转换为语言进行播放
    function getVoice (tx){
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: tx
            },
            success: function(res){
                if(res.status === 200){
                    $('#audio').prop('src', res.voiceUrl)
                }
            }
        })
    }
    // 自动播放开关
    $('#audioicon').on('click','use',function(){
        const flag = $(this).attr('xlink:href')
        if(flag === '#icon-audiomute'){
            $(this).attr('xlink:href', '#icon-audiomid')
            $('#audio').prop('autoplay', true)
        }else{
            $(this).attr('xlink:href', '#icon-audiomute')
            $('#audio').prop('autoplay', false)
        }
        
    })
    // 回车发送消息
    $('#ipt').on('keyup',function(e){
        if(e.keyCode === 13){
            $('#sendmsg').click()
        }
    })
  })