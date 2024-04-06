












let feature_index = 0;
const feature_names = ["bomb", "turret_controls", "turrets", "slider_controls", "slider", "disruptor", "supernova", "core","spinner"];

const mechanics_img = document.querySelector(".mechanics-img")



console.log(feature_names.length+ " features length");



function nextFeature(direction)
{

    console.log(feature_index+ " index before");


    feature_index+= (direction=="right") ? 1 : -1;
    console.log(feature_index + " 1 or -1");
   
    
    if (feature_index == feature_names.length) {
        feature_index = 0;
        console.log("upper limit");
    }
    else if (feature_index == -1)
    {
        feature_index = feature_names.length-1;
        console.log("lower limit");
    } 

    console.log(feature_index+ " index after");


   
    let feature_name = feature_names[feature_index];

    mechanics_img.setAttribute("src","img/features/"+feature_name+".png");
    console.log(feature_name+ " features index");



    


    
    
   
 


}




