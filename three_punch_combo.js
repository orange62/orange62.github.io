        $i = 0;
        $('#start').click(function(){
            $i++;
            if($i >=6 ){
                $('#start').hide();
                $('#stop').show();
                // 停止随机选择动画
                if(typeof timer !== 'undefined') {
                    clearInterval(timer);
                }
                // 显示最终结果
                $('#what').html('别选了，随便吃点吧！');
            }
        })
        $('#stop').click(function(){
            alert('这么作？今天别吃了！')
            $(this).hide();
            $('#start').show();
            $i = 0; // 重置计数器
        })