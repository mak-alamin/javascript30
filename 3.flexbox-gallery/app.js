let panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener("click", function(e){
        console.log(e);
        this.classList.toggle('open');
    });

    panel.addEventListener("transitionend", function(e){
        if(e.propertyName.includes('flex')){
            this.classList.toggle('active');
        }
    })
});