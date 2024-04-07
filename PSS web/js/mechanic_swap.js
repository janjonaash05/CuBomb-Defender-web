












let mechanic_index = 0;
const mechanic_names = ["bomb", "turret_controls", "turrets", "slider_controls", "slider", "disruptor", "supernova", "shield","core", "spinner", "harpoon", "tokens","token_transporters", "grid", "upgrade_station", "helper_station",  "black_hole", "emp"];

const mechanics_img = document.querySelector(".mechanics-img")



console.log(mechanic_names.length + " mechanics length");


let mechanic_relations_map = new Map();


mechanic_relations_map.set("bomb", ["core", "spinner", "shield","turret_controls","turrets"]);
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
mechanic_relations_map.set("token_transporters", ["tokens"]);
mechanic_relations_map.set("harpoon", ["tokens"]);
mechanic_relations_map.set("upgrade_station", ["turrets", "slider", "slider_controls", "shield"]);
mechanic_relations_map.set("helper_station", ["emp", "black_hole"]);
mechanic_relations_map.set("shield", ["core", "spinner"]);
mechanic_relations_map.set("black_hole", ["bomb"]);
mechanic_relations_map.set("emp", ["disruptor", "supernova"]);




let mechanic_description_map = new Map();


mechanic_description_map.set("bomb", ["Bomb", "bomb"]);
mechanic_description_map.set("turret_controls", ["Turret Controls", "turret-controls"]);
mechanic_description_map.set("turrets", ["Turrets","turrets"]);
mechanic_description_map.set("slider_controls", ["Slider Controls","slider-controls"]);
mechanic_description_map.set("slider", ["Slider", "slider"]);
mechanic_description_map.set("supernova", ["Supernova", "supernova"]);
mechanic_description_map.set("disruptor", ["Disruptor","disruptor"]);
mechanic_description_map.set("core", ["Core","core"]);
mechanic_description_map.set("spinner", ["Spinner","spinner"]);
mechanic_description_map.set("grid", ["Bomb Grid","grid"]);
mechanic_description_map.set("tokens", ["Tokens", "tokens"]);
mechanic_description_map.set("token_transporters", ["Token Transporters", "token-transporters"]);
mechanic_description_map.set("harpoon", ["Harpoon","harpoon"]);
mechanic_description_map.set("upgrade_station", ["Upgrade Station", "upgrade-station"]);
mechanic_description_map.set("helper_station", ["Helper Station", "helper-station"]);
mechanic_description_map.set("shield", ["Shield", "shield"]);
mechanic_description_map.set("black_hole", ["Black Hole", "black-hole"]);
mechanic_description_map.set("emp", ["EMP", "emp"]);







let mechanic_element_map = new Map();






const mechanics_header_box = document.querySelector(".mechanics-header-box");


switchDescriptions("bomb");
function switchDescriptions(feature_name)
{

    const all_descs = document.querySelectorAll(".mechanics-list-item");
    all_descs.forEach(x=> x.classList.add("hide-class"));


    mechanics_header_box.innerHTML = mechanic_description_map.get(feature_name)[0];



    const to_show_desc_class = ".mechanic-desc-"+mechanic_description_map.get(feature_name)[1];

    const to_show_descs = document.querySelectorAll(to_show_desc_class);

    to_show_descs.forEach(x => x.classList.remove("hide-class"));





      



}



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
    switchDescriptions(mechanic_name);










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
