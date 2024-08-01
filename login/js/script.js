$(function () {
    // 处理忘记密码按钮的点击事件
    $('.forgotBtn').click(function () {
        $('#forgot').toggleClass('toggle');
    });

    // 处理注册按钮的点击事件
    $('.registerBtn').click(function () {
        $('#register, #formContainer').toggleClass('toggle');
    });

    // 处理注册表单的提交事件
    $('#register').submit(function(event) {
        event.preventDefault(); // 阻止表单默认提交行为
        var username = $('input[type="text"]', this).val();
        var password = $('input[type="password"]', this).val();
        var confirmPassword = $('input[type="password"]:last', this).val();

        // 检查用户名和密码是否已输入
        if (!username || !password) {
            alert('用户名和密码不能为空！');
            return;
        }

        // 检查两次密码是否一致
        if (password !== confirmPassword) {
            alert('两次输入的密码不一致！');
            return;
        }

        // 保存用户名和密码到localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('注册成功！');
        // 注册成功后的其他逻辑...
        // 清空表单
        $(this).trigger('reset');
    });

    // 处理登录表单的提交事件
    $('#login').submit(function (event) {
        event.preventDefault(); // 阻止表单默认提交行为

        var inputUsername = $('input[type="text"]', this).val();
        var inputPassword = $('input[type="password"]', this).val();

        // 检查用户名和密码是否已输入
        if (!inputUsername || !inputPassword) {
            alert('用户名和密码不能为空！');
            return;
        }

        // 从localStorage获取保存的用户名和密码
        var storedUsername = localStorage.getItem('username');
        var storedPassword = localStorage.getItem('password');

        // 验证用户名和密码
        if (inputUsername === storedUsername && inputPassword === storedPassword) {
            // 登录成功，跳转到001.html
            window.location.href = '001.html';
        } else {
            // 登录失败，显示警告并打开002.html
            alert('用户名或密码错误！');
            window.location.href = '002.html';
        }
    });
});
