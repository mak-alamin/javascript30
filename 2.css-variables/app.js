var controls = document.querySelectorAll('.controls input');

controls.forEach(input => {
    input.addEventListener("change", handleUpdates);
    input.addEventListener("mousemove", handleUpdates);
});

function handleUpdates(){

    const suffix = this.dataset.sizing || '' ;
   
    document.body.style.setProperty(`--${this.name}`, this.value + suffix);
}