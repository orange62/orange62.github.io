        $i = 0;
        
        function handleStartCount(e) {
            e.preventDefault();
            e.stopPropagation();
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
        }
        
        function handleStopClick(e) {
            e.preventDefault();
            e.stopPropagation();
            alert('这么作？今天别吃了！')
            $(this).hide();
            $('#start').show();
            $i = 0; // 重置计数器
        }
        
        // 绑定多种事件以确保兼容性
        $('#start').bind('click touchstart', handleStartCount);
        $('#stop').bind('click touchstart', handleStopClick);