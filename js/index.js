$(document).ready(function(){
    var signup = $(".register");
    var login = $(".login");
    var slider = $(".slider");
    var formSection = $(".form-section");
    var lform = $(".lclkbtn");
    var rform = $(".rclkbtn")
    var email = $("#floatingInput");
    var email2 = $("#floatingEmail");
    var a = $("#floatingName");
    
    var pass = $("#floatingPass");
    var cpass = $("#floatingConf");
    
    var customModal = $(".custom-modal");
    var closeModalButton = $(".close-modal");
    
    signup.on("click", function() {
        slider.addClass("moveslider");
        formSection.addClass("form-section-move");
        formSection.removeClass("form-section-login");
        img.addClass("img-left");
    });
    
    login.on("click", function() {
        slider.removeClass("moveslider");
        formSection.removeClass("form-section-move");
        formSection.addClass("form-section-login");
        img.removeClass("img-left");
    });
    
    
    function callMeIfValid() {
        // submit form or whatever
        alert("valid input");
    }
    
    function checkPasswordsMatch() {
        if (pass.val() !== cpass.val()) {
            cpass.addClass("wrong");
            cpass.css("border", "2px solid red");
            alert(confirmPassword.data("error"));
            return false;
        } else {
            cpass.removeClass("wrong");
            cpass.css("border", "");
            return true;
        }
    }
    
    lform.on("click", function(event) {
        event.preventDefault();
        
        if (email[0].checkValidity()) {
            customModal.show();
            $(".tick-animation-l").addClass("active");
            setTimeout(function() {
                window.location.href = 'main.html';
            }, 3000);
        } else {
            email.addClass("wrong");
            email.css("border", "2px solid red");
        }
    });
    
    rform.on("click", function(event) {
        event.preventDefault();
        
        if (email2[0].checkValidity()) {
            if(checkPasswordsMatch()){
                customModal.show();
                $(".tick-animation").addClass("active");
                
                var userName = a.val();
                localStorage.setItem('sharedVariable', userName);
                
                setTimeout(function() {
                    window.location.href = 'main.html';
                }, 3000);
                
            }
            
        } else {
            email2.addClass("wrong");
            email2.css("border", "2px solid red");
        }
    });
    
});

function createRipple(event) {
    const button = event.currentTarget;
    
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
    
    const ripple = button.getElementsByClassName("ripple")[0];
    
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

const buttons = document.getElementsByClassName("clkbtn");
for (const button of buttons) {
    button.addEventListener("click", createRipple);
}


