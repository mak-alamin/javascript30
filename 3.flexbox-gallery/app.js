let panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener("click", function(){
        this.classList.toggle('open');
    });

    panel.addEventListener("transitionend", function(){
        this.classList.toggle('active');
    })
});