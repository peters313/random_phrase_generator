
var adjectives = [];

var modedAdj = [];

var topicsCovered = [];

function populateData() {
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            data.map(function(item){
                switch(item.key) {
                    case "adjectives":
                        adjectives = item.values;
                        break;
                    case "modifying_adjectives":
                        modedAdj = item.values;
                        break;
                    case "topics":
                        topicsCovered = item.values;
                        break;
                }
            });
        }
    });

}
function randomNum(min, max){
   return Math.round(Math.random() * (max - min) + min);
}

function generatePhrase(){
    var randomAdj = adjectives[randomNum(0, adjectives.length - 1)];
    var randomModAdj = modedAdj[randomNum(0, modedAdj.length - 1)];
    var randomTopics = topicsCovered[randomNum(0, topicsCovered.length - 1)];

    return randomModAdj + " " + randomAdj + " " + randomTopics;
}

$(document).ready(function(){
    populateData();

    $("#generatePhrase").on('click', function(){
        $(".phrase").remove();
        var el = "<h2 class='phrase'>" + generatePhrase() + "</h2>";
        $('.generatedPhrase').append(el);
    });

});