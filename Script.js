var CreateTable = function(groupNubmer,week){
    $.getJSON(groupNubmer+'_'+week+'.json', function (obj) {
        document.getElementById("topbar").innerHTML += "<div>Grupa: "+groupNubmer+" tydzień: "+week+"</div>";
        for(i=0;i<obj.length;i++)          
        {
            var numberOfDay=i+1;
            var divId = "d"+numberOfDay;
              
            document.getElementById(divId).innerHTML += '<div class="day">'+obj[i].day+'</div>'; 
            for(j=0;j<obj[i].classes.length;j++)
            {
            document.getElementById(divId).innerHTML += "<b>"+obj[i].classes[j].name+"</b></br>"+obj[i].classes[j].teacher+"</br>"+obj[i].classes[j].start+" - "+obj[i].classes[j].stop+"</br>"+obj[i].classes[j].class;	 
            if(j<obj[i].classes.length-1)
            document.getElementById(divId).innerHTML += '<div class="break"> PRZERWA: '+obj[i].classes[j].stop+" - "+obj[i].classes[j+1].start +"</div>";
            
            
        }}    
    });
}
CreateTable("L3","A");  