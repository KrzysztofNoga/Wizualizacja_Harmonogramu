var CreateTable = function(groupNubmer){
    $.getJSON(groupNubmer+'.json', function (obj) {
        for(i=0;i<obj.length;i++)          
        {
            var numberOfDay=i+1;
            var divId = "d"+numberOfDay;   
            document.getElementById(divId).innerHTML += '<div style="background-color:  rgb(83, 116, 206)"><center>'+obj[i].day+'</center></div>'; 
            document.getElementById(divId).innerHTML += '<div style="background-color: rgb(13, 133, 19)"> START: '+obj[i].classes[0].start+"</div></br>";
            
            for(j=0;j<obj[i].classes.length;j++)
            {
            document.getElementById(divId).innerHTML += "<b>"+obj[i].classes[j].name+"</b></br>"+obj[i].classes[j].start+" - "+obj[i].classes[j].stop;	 
            if(j<obj[i].classes.length-1)
            document.getElementById(divId).innerHTML += '<div style="background-color: rgb(13, 133, 19)"> PRZERWA: '+obj[i].classes[j].stop+" - "+obj[i].classes[j+1].start +"</div></br>";
            else
            document.getElementById(divId).innerHTML += '<div style="background-color: rgb(13, 133, 19)"> STOP: '+obj[i].classes[obj[i].classes.length-1].stop+"</div>";
        }}    
    });
}
CreateTable("L3");