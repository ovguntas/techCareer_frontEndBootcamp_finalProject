
$(function () {
    console.log("Hello")
})

$(function () {

    $("#root").after("<p>We are gonna use jquery to validate login form submission by jquery</p> ")

})


// login form validation

//when submited form 


$(function () {
    $("#LogInForm").on("submit", (e) => {
        // e.preventDefault();
        const email = $("#logınInputEmail1").val();
        const password = $("#logInInputPassword1").val();
        if (email == "") {
            $("#invalidFeedbackEmail").text("This part can't be empty")
        } else if (validateEmail(email) == false) {
            $("#invalidFeedbackEmail").text("You have to write valid email address")
        } else {
            $("#invalidFeedbackEmail").text("")
        }


        function validateEmail(email) {
            let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email);
        }


        if (password == "") {
            $("#invalidFeedbackPassword").text("This part can't be empty")
        }


    })
})



$(function () {
    const rePassword = $("#exampleReInputPassword1");
    const password = $("#exampleInputPassword1");
    rePassword.on("change", () => {
        console.log(rePassword.val());
        console.log(password.val());
        if (rePassword.val() != password.val()) {
            $("#invalidFeedbackRePassword").text("Passwords should be matched");
            $("#exampleReInputPassword1").css("border", "1px solid red")
        } else {
            $("#invalidFeedbackRePassword").text("");
            $("#exampleReInputPassword1").css("border", "1px solid green")
        }
    })
})

