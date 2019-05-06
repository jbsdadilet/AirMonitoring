let myChart = document.getElementById('myChart').getContext('2d');
let values = [ 7, 4, 6, 8, 7, 5]   // ALL HAPPY CONDITIONS

let PM = values[4];
let CO2 = values[0];
let SO = values[1];
let topFiveGases = new Chart(myChart, {
    type:'bar',
    data:{
    labels:['Carbon dioxide (CO2)', 'Sulfur oxides (SOx)', 'Nitrogen oxides (NOx)','Volatile organic compounds (VOC)', 'Particulate matter PM2.5/PM10', 'Methane (CH4)'],
    datasets:[{
    label:'Top 6 harmful gases',
    data:values,
    backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(82, 102, 255, 0.6)',
        ],
    borderWidth:1,
    borderColor:'#777',
    hoverBorderWidth:3,
    hoverBorderColor:'#000'          
    }],
            },
options:{
    title:{
        display:true,
        text:'Urban Air Pollution',
        fontSize:30
    },
    legend:{
        display:true,
    position:'right',
        labels:{
        fontColor:'black'
        }
    },
    layout:{
        padding:{
        left:90,
        right:0,
        bottom:0,
        top:0
        }
    },
    tooltips:{
    enabled:true
    }
}
}); 

if (PM >= 30){
    var element = document.createElement("div");
    element.className = 'lips1_Sad';
    element.appendChild(document.createTextNode(''));
    document.getElementById('emoji1').appendChild(element);  
    console.log('Sad')  

    var recommendationCyc = document.createElement('p');
    recommendationCyc.className = 'tx_Cycling';
    recommendationCyc.appendChild(document.createTextNode('☠ TAKE IT EASY ☠'));
    document.getElementById('text_cyc').appendChild(recommendationCyc);

    var recommendationRest = document.createElement('p');
    recommendationRest.className = 'tx_coffee';
    recommendationRest.appendChild(document.createTextNode('☢ BE CAUTIOUS! ☢'));
    document.getElementById('text_coffee').appendChild(recommendationRest);
    
    var recommendationWalk = document.createElement('p');
    recommendationWalk.className = 'tx_walk';
    recommendationWalk.appendChild(document.createTextNode('⚠ TAKE CARE ⚠'));
    document.getElementById('text_walk').appendChild(recommendationWalk);

    var recommendationRun = document.createElement('p');
    recommendationRun.className = 'tx_run';
    recommendationRun.appendChild(document.createTextNode('☣ TAKE IT EASY ☣'));
    document.getElementById('text_run').appendChild(recommendationRun);
}
else if (PM < 30 && PM >= 20 ){
    var element = document.createElement("div");
    element.className = 'lips1_OK';
    element.appendChild(document.createTextNode(''));
    document.getElementById('emoji1').appendChild(element);
    
    var recommendationCyc = document.createElement('p');
    recommendationCyc.id = 'tx_Cycling';
    recommendationCyc.appendChild(document.createTextNode('☺ In your hands! ☺'));
    document.getElementById('text_cyc').appendChild(recommendationCyc);

    var recommendationRest = document.createElement('p');
    recommendationRest.id = 'tx_coffee';
    recommendationRest.appendChild(document.createTextNode('☀ The choice is yours! ☀'));
    document.getElementById('text_coffee').appendChild(recommendationRest);
    
    var recommendationWalk = document.createElement('p');
    recommendationWalk.id = 'tx_walk';
    recommendationWalk.appendChild(document.createTextNode('♡ UP TO YOU ♡'));
    document.getElementById('text_walk').appendChild(recommendationWalk);

    var recommendationRun = document.createElement('p');
    recommendationRun.id = 'tx_run';
    recommendationRun.appendChild(document.createTextNode('☘ AS YOU WISH! ☘'));
    document.getElementById('text_run').appendChild(recommendationRun);
}else{
    var element = document.createElement("div");
    element.className = 'lips1_Happy';
    element.appendChild(document.createTextNode(''));
    document.getElementById('emoji1').appendChild(element);
    console.log('Happy')

    var recommendationCyc = document.createElement('p');
    recommendationCyc.id = 'tx_Cycling';
    recommendationCyc.appendChild(document.createTextNode('☺ GO FOR IT! ☺'));
    document.getElementById('text_cyc').appendChild(recommendationCyc);

    var recommendationRest = document.createElement('p');
    recommendationRest.id = 'tx_coffee';
    recommendationRest.appendChild(document.createTextNode('☀ JUST DO IT! ☀'));
    document.getElementById('text_coffee').appendChild(recommendationRest);
    
    var recommendationWalk = document.createElement('p');
    recommendationWalk.id = 'tx_walk';
    recommendationWalk.appendChild(document.createTextNode('♡ GO AHEAD! ♡'));
    document.getElementById('text_walk').appendChild(recommendationWalk);

    var recommendationRun = document.createElement('p');
    recommendationRun.id = 'tx_run';
    recommendationRun.appendChild(document.createTextNode('☘ ENJOY IT! ☘'));
    document.getElementById('text_run').appendChild(recommendationRun);
};

if (CO2 >= 25){
    var element = document.createElement("div");
    element.className = 'lips2_Sad';
    element.appendChild(document.createTextNode(''));
    document.getElementById('emoji2').appendChild(element);  
    console.log('Sad')  
}
else if (CO2 < 25 && CO2 >= 15 ){
    var element = document.createElement("div");
    element.className = 'lips2_OK';
    element.appendChild(document.createTextNode(''));
    document.getElementById('emoji2').appendChild(element);
    console.log('OK')
}else{
    var element = document.createElement("div");
    element.className = 'lips2_Happy';
    element.appendChild(document.createTextNode(''));
    document.getElementById('emoji2').appendChild(element);
    console.log('Happy')
};

if (SO >= 10){
    var element = document.createElement("div");
    element.className = 'lips3_Sad';
    element.appendChild(document.createTextNode(''));
    document.getElementById('emoji3').appendChild(element);  
    console.log('Sad')  
}
else if (SO < 10 && SO >= 5 ){
    var element = document.createElement("div");
    element.className = 'lips3_OK';
    element.appendChild(document.createTextNode(''));
    document.getElementById('emoji3').appendChild(element);
    console.log('OK')
}else {
    var element = document.createElement("div");
    element.className = 'lips3_Happy';
    element.appendChild(document.createTextNode(''));
    document.getElementById('emoji3').appendChild(element);
    console.log('Happy')
};

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// code of date
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

// make black hole draggable by jquery 
$(document).ready(function(){
    $("svg").draggable();
}); 