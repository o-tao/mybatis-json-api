$(document).ready(()=> {
    console.log("Token!!");

    const EVENT1 = (token) => {
        $.ajax({
            method: "GET",
            url: "http://localhost:80/token",
            beforeSend : function(xhr){
                xhr.setRequestHeader("Authorization", token);
            },
            success: function(res) {
                console.log(res);
                /*
                $("#token").text(res);
                $("#tokens").empty();
                res.split(".").forEach(e => $("#tokens").append(`<li class="text-break">${e}</li>`));
                */
                localStorage.setItem("token", res);
                // alert(localStorage.getItem("token"));

            },
            error: function(res) {
                console.log(res);
            }
        });
    }
    // EVENT1();
    
    const EVENT2 = (token) => {
        $.ajax({
            method: "POST",
            url: "http://localhost:80/getUser",
            // data: {"token": token},
            beforeSend : function(xhr){
                xhr.setRequestHeader("Authorization", token);
                
            },
            success: function(res) {
                console.log(res);

            },
            error: function(res) {
                console.log(res);

            }
        });
    }

    const EVENT3 = (token) => {
        $.ajax({
            method: "GET",
            url: "http://localhost:80/admin",
            // data: {"token": token},
            beforeSend : function(xhr){
                xhr.setRequestHeader("Authorization", token);
                
            },
            success: function(res) {
                console.log(res);

            },
            error: function(res) {
                console.log(res);

            }
        });
    }

    $("#btn1").on("click", () => {
        let token = localStorage.getItem("token");
        if(token == null) {
            alert("토큰이 없습니다.");
            return;
        }
        EVENT1(token);
    });

    $("#btn2").on("click", () => {
        let token = localStorage.getItem("token");
        if(token == null) {
            alert("토큰이 없습니다.");
            return;
        }
        // alert("토큰이 존재합니다.")
        EVENT2(token);

    });

    $("#btn3").on("click", () => {
        let token = localStorage.getItem("token");
        if(token == null) {
            alert("토큰이 없습니다.")
            return;
        }
        EVENT3(token);
    });

    $("form").on("submit", e => {
        // form 태그가 가지고 있는 이벤트를 막는 부분
        e.preventDefault();
        let params = {
            "userNm": $("#userNm").val(),
            "userPwd": $("#userPwd").val()
        }
        console.log("form", params)

                // "/jsLogin"
                $.ajax({
                    method: "POST",
                    url: "http://localhost:80/jsLogin",
                    data: params,
                    beforeSend : function(xhr){
                        // xhr.setRequestHeader("Authorization", "");
                        
                    },
                    success: function(res) {
                        console.log(res);
                        localStorage.setItem("token", res.token);
        
                    },
                    error: function(res) {
                        console.log(res);
        
                    }
            });
    });

    localStorage.removeItem("token");
    // alert(localStorage.getItem("token"));

});