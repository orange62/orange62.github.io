    $(function () {
    var run = 0,
        heading = $("h1"),
        timer;

    // 添加移动端触摸事件支持
    function handleStartClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // 检查是否已经达到最大点击次数
        if ($("#start").is(':hidden')) {
            return;
        }

        var list = $("#list").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
        if (!run) {
            heading.html(heading.html().replace("吃这个！", "吃什么？"));
            $("#start").val("停止");
            timer = setInterval(function () {
                var r = Math.ceil(Math.random() * list.length),
                    food = list[r - 1];
                $("#what").html(food);
                var rTop = Math.ceil(Math.random() * $(document).height()),
                    rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                    rSize = Math.ceil(Math.random() * (37 - 14) + 14);
                $("<span class='temp'></span>").html(food).hide().css({
                    "top": rTop,
                    "left": rLeft,
                    "color": "rgba(0,0,0,." + Math.random() + ")",
                    "fontSize": rSize + "px"
                }).appendTo("body").fadeIn("slow", function () {
                    $(this).fadeOut("slow", function () {
                        $(this).remove();
                    });
                });
            }, 50);
            run = 1;
        } else {
           heading.html(heading.html().replace("吃什么？", "吃这个！"));
            $("#start").val("开始");
            clearInterval(timer);
            run = 0;
        }
    }

    // 绑定多种事件以确保兼容性
    $("#start").on('click touchstart', handleStartClick);

    document.onkeydown = function enter(e) {
        var e = e || event;
        if (e.keyCode == 13) $("#start").trigger("click");
    };
});