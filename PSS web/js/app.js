


let color_index = 0;
const color_names = ["blue", "cyan", "teal", "green", "yellow", "orange", "red", "magenta"];

function setColor() {
    let color_name = color_names[color_index];





    const header = document.querySelector(".header-text");
    const glow_targets = document.querySelectorAll(".glow-target");

    const outline_targets = document.querySelectorAll(".outline-target");




    let color_class = "color-" + color_name;
    let glow_class = "glow-" + color_name;
    let outline_class = "outline-"+color_name;


   // let glow_class_previous = color_index != 0 ? "glow-" + color_names[color_index - 1] : "glow-" + color_names[color_names.length - 1];
   // let color_class_previous = color_index != 0 ? "color-" + color_names[color_index - 1] : "color-" + color_names[color_names.length - 1];


   let glow_class_previous = getColorClassName("glow");
   let color_class_previous = getColorClassName("color");
   let outline_class_previous = getColorClassName("outline");


    header.classList.remove(color_class_previous);
    header.classList.add(color_class);


    glow_targets.forEach(x => {
       x.classList.remove(glow_class_previous);
        x.classList.add(glow_class);
    });


    outline_targets.forEach(x => {
        x.classList.remove(outline_class_previous);
         x.classList.add(outline_class);
     });





    color_index++;

   // console.log(color_name);
    if (color_index == color_names.length) color_index = 0;

}






function getColorClassName(prefix)
{
    return color_index != 0 ? prefix+"-" + color_names[color_index - 1] :  prefix+"-" + color_names[color_names.length - 1];

}

setColor();
setInterval(setColor, 1000);


