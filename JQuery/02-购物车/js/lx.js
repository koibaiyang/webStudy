
$(function(){
    // 全选控制小复选框
    $('.checkall').change(function(){
        $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'))
        if($(this).prop('checked')){
            $('.cart-item').addClass('check-cart-item')
        }else{
            $('.cart-item').removeClass('check-cart-item')

        }
    })
    // 小复选框控制全选
    $('.j-checkbox').change(function(){
        if($('.j-checkbox:checked').length === $('.j-checkbox').length){
            $('.checkall').prop('checked', true)
        }else{
            $('.checkall').prop('checked', false)
        }
        if($(this).prop('checked')){
            $(this).parents('.cart-item').addClass('check-cart-item')
        }else{
            $(this).parents('.cart-item').removeClass('check-cart-item')

        }
    })
    // 数量++
    $('.increment').click(function(){
        let n = $(this).siblings('.itxt').val()
        n++
        $(this).siblings().val(n)
        let p = $(this).parent().parent().siblings('.p-price').text()
        p = p.substring(1) 
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2))
        getSum()
    })
    // 数量--
    $('.decrement').click(function(){
        let n = $(this).siblings('.itxt').val()
        if(n > 1){
            n--
            $(this).siblings().val(n)
        }else{
            n = 1
            $(this).siblings().val(n)
        }
        let p = $(this).parent().parent().siblings('.p-price').text()
        p = p.substring(1) 
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2))
        getSum()
       
    })
    // 数量框
    $('.itxt').change(function(){
        let n = $(this).val()
        let p = $(this).parent().parent().siblings('.p-price').text()
        p = p.substring(1) 
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2))
        getSum()
    })
    // 总价和总计
    function getSum (){
        let num = 0
        let totalPrice = 0
        $('.itxt').each(function(){
            num += +$(this).val()
        })
        $('.amount-sum em').html(num)
        $('.p-sum').each(function(){
            totalPrice += +$(this).text().substring(1)
        })
        $('.price-sum em').html(totalPrice.toFixed(2))
    }
    getSum()
    // 删除
    $('.p-action a').click(function(){
        $(this).parents('.cart-item').remove()
        getSum()
    })
    $('.remove-batch').click(function(){
        $('.j-checkbox:checked').parents('.cart-item').remove()
        getSum()
    })
    $('.clear-all').click(function(){
        $('.cart-item').remove()
    })
})

