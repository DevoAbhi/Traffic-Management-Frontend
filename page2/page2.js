const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav class
        nav.classList.toggle('nav-active');

        // Toggle animation
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } 
            else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`;
            }
        }) 
        burger.classList.toggle('toggle');
    })
}

let playerl = document.getElementsByClassName('player-list');

for (let i =0; i< playerl.length; i++) {
    playerl[i].addEventListener('click', function() {
        var content = this.nextElementSibling;
        // const options = this.nextElementSibling.querySelectorAll('.option')
        if(content.style.maxHeight) {
            content.style.maxHeight = null;
            // options.forEach(function(option) {
            //     option.style.padding = null
            // })

        }
        else{
            content.style.maxHeight = content.scrollHeight + "px";
            // options.forEach(function(option, index) {
            //     if(index == 3){
            //         option.style.borderRight = null
            //     }
            //     option.style.padding = '2rem 0px'
            // })
        }

    })
}

navSlider();