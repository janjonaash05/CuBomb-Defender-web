












let mechanic_index = 0;
const mechanic_names = ["bomb", "turret_controls", "turrets", "slider_controls", "slider", "disruptor", "supernova", "core", "spinner", "grid", "tokens", "upgrade_station", "helper_station", "shield", "black_hole", "emp"];

const mechanics_img = document.querySelector(".mechanics-img")



console.log(mechanic_names.length + " mechanics length");


let mechanic_relations_map = new Map();


mechanic_relations_map.set("bomb", ["core", "spinner", "shield"]);
mechanic_relations_map.set("turret_controls", ["turrets", "bomb"]);
mechanic_relations_map.set("turrets", ["core", "bomb", "spinner"]);
mechanic_relations_map.set("slider_controls", ["slider"]);
mechanic_relations_map.set("slider", ["supernova", "disruptor"]);
mechanic_relations_map.set("supernova", ["core", "spinner"]);
mechanic_relations_map.set("disruptor", ["turret_controls"]);
mechanic_relations_map.set("core", []);
mechanic_relations_map.set("spinner", []);
mechanic_relations_map.set("grid", ["bomb"]);
mechanic_relations_map.set("tokens", ["grid", "upgrade_station", "helper_station"]);
mechanic_relations_map.set("upgrade_station", ["turrets", "slider", "slider_controls", "shield"]);
mechanic_relations_map.set("helper_station", ["emp", "black_hole"]);
mechanic_relations_map.set("shield", ["core", "spinner"]);
mechanic_relations_map.set("black_hole", ["bomb"]);
mechanic_relations_map.set("emp", ["disruptor", "supernova"]);




let mechanic_description_map = new Map();


mechanic_description_map.set("bomb","Enemy object, floating towards the player's Shield. Can be one of the 8 colors")








let mechanic_element_map = new Map();







function generateListedmechanics() {
    const container = document.querySelector(".mechanics-listed-container");

    mechanic_names.forEach(x => {

        const listed = document.createElement("img");
        listed.setAttribute("src", getPath(x));
        listed.classList.add("mechanics-listed-img");


        mechanic_element_map.set(x, listed);
        container.appendChild(listed);



    });




}

generateListedmechanics();




function nextMechanic(direction) {

    console.log(mechanic_index + " index before");


    mechanic_index += (direction == "right") ? 1 : -1;



    if (mechanic_index == mechanic_names.length) {
        mechanic_index = 0;
        console.log("upper limit");
    }
    else if (mechanic_index == -1) {
        mechanic_index = mechanic_names.length - 1;
        console.log("lower limit");
    }





    let mechanic_name = mechanic_names[mechanic_index];

    mechanics_img.setAttribute("src", getPath(mechanic_name));


    


    showRelations(mechanic_name);










}



showRelations("bomb");
function showRelations(mechanic_name)
{






    const all_mechanics = document.querySelectorAll(".mechanics-listed-img");
    all_mechanics.forEach(x => { x.setAttribute("class","mechanics-listed-img outline-text")});


    let affected_mechanics = [];

    if (mechanic_relations_map.get(mechanic_name).length != 0) {

        mechanic_relations_map.get(mechanic_name).forEach(x => {

            affected_mechanics.push(mechanic_element_map.get(x));
        }
        );
    }

    console.log(affected_mechanics.length + " mechanics");

    affected_mechanics.forEach(x => { x.setAttribute("class", "mechanics-listed-img glow-text")});
    








    const current_mechanic = mechanic_element_map.get(mechanic_name);

 

    
    current_mechanic.setAttribute("class","mechanics-listed-img outline-target "+outline_class + " glow-small-target "+glow_small_class);



    



    console.log(mechanic_name + " mechanics index");

}





















function arrowMouseEnter(element)
{
    element.classList.add("outline-text");
}

function arrowMouseLeave(element)
{
    element.classList.remove("outline-text");
}


function getPath(name) {
    return "img/mechanics/" + name + ".png"
}
