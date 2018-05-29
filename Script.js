 
var CreateTable = function(groupNubmer,week){
    
    $.getJSON(groupNubmer+'_'+week+'.json', function (obj) {
        
        for(i=0;i<obj.length;i++)          
        {   
            var numberOfDay=i+1;
            var divId = "d"+numberOfDay;
              
            document.getElementById(divId).innerHTML += '<div class="day">'+obj[i].day+'</div>';
            if(obj[i].classes.length==0)
            {
                document.getElementById(divId).innerHTML += '<div class="break"> BRAK ZAJĘĆ </div>';
            }
            else 
            {
            for(j=0;j<obj[i].classes.length;j++)
            {
            document.getElementById(divId).innerHTML += "<b>"+obj[i].classes[j].name+"</b></br>"+obj[i].classes[j].teacher+"</br>"+obj[i].classes[j].start+" - "+obj[i].classes[j].stop+"</br>"+obj[i].classes[j].class;	 
            if(j<obj[i].classes.length-1)
            document.getElementById(divId).innerHTML += '<div class="break"> PRZERWA: '+obj[i].classes[j].stop+" - "+obj[i].classes[j+1].start +"</div>";
            }
            
        }}    
    });
}

var CheckValueSelect1 = function()
{   
    var valueGroup = document.getElementById("Select1").value;
    return valueGroup;
}

var CheckValueSelect2 = function()
{   
    var valueWeek = document.getElementById("Select2").value;
    return valueWeek;
}

var CheckValueSelect3 = function()
{   
    var valueSelect3 = document.getElementById("Select3").value;
    return valueSelect3;
     
}

var CheckValueSelect4 = function()
{   
    var valueSelect4 = document.getElementById("Select4").value;
    return valueSelect4;
     
}
var CheckValueSelect5 = function()
{   
    var valueSelect4 = document.getElementById("Select5").value;
    return valueSelect4;
     
}
var CheckValueSelect6 = function()
{   
    var valueSelect4 = document.getElementById("Select6").value;
    return valueSelect4;
     
}
var BasicContent = function()
{
    document.getElementById("content").innerHTML='<div id ="d1" class="first"></div><div id ="d2"class="second"></div><div id ="d3" class="first">  </div><div id ="d4" class="second"></div><div id ="d5" class="first"></div> '
}

var CompareContent = function()
{
    document.getElementById("content").innerHTML='<span id="CompareContent"><div id ="d1" class="day2"></div><div id ="d2"class="day2"></div><div id ="d3" class="day2">  </div><div id ="d4" class="day2"></div><div id ="d5" class="day2"></div><div style="clear:both;"></div><div id ="dv1" class="firstC"></div><div id ="dv2"class="secondC"></div><div id ="dv3" class="firstC">  </div><div id ="dv4" class="secondC"></div><div id ="dv5" class="firstC"></div><div id ="dv6" class="secondC"></div><div id ="dv7" class="firstC"></div><div id ="dv8" class="secondC"></div><div id ="dv9" class="firstC"></div><div id ="dv10" class="secondC"></div> <div style="clear:both;"></div></span>'
    
}

var NameOfDays = function(){
    var Week=["Poniedziałek","Wtorek","Środa","Czwartek","Piątek"];
    for(i=0;i<5;i++)
    {
    var id=i+1;
    var divId="d"+id;
    document.getElementById(divId).innerHTML= Week[i];
    
    }
}

var CreateTableCompare = function(groupNubmer1,groupNubmer2,week1,week2){
    NameOfDays();
    var numberOfDay1=1;
    var numberOfDay2=2;
    $.getJSON(groupNubmer1+'_'+week1+'.json', function (obj) {
        
        for(i=0;i<obj.length;i++)          
        {
            
            var divId = "dv"+numberOfDay1;
            numberOfDay1=numberOfDay1+2;
            document.getElementById(divId).innerHTML += '<div class="day">'+groupNubmer1+'</div>';
            if(obj[i].classes.length==0)
            {
                document.getElementById(divId).innerHTML += '<div class="break"> BRAK ZAJĘĆ </div>';
            }
            else 
            {
            for(j=0;j<obj[i].classes.length;j++)
            {
                document.getElementById(divId).innerHTML += "<b>"+obj[i].classes[j].name+'</br></b><span style="font-size: 10px;">'+obj[i].classes[j].teacher+"</span></br>"+obj[i].classes[j].start+" - "+obj[i].classes[j].stop+"</br>"+obj[i].classes[j].class;		 
            if(j<obj[i].classes.length-1)
            document.getElementById(divId).innerHTML += '<div class="break"> PRZERWA: '+obj[i].classes[j].stop+" - "+obj[i].classes[j+1].start +"</div>";
            }
            
        }}   
    });
     
    $.getJSON(groupNubmer2+'_'+week2+'.json', function (obj) {
         
        for(i=0;i<obj.length;i++)          
        {
            
            var divId = "dv"+numberOfDay2;
            numberOfDay2=numberOfDay2+2;
            document.getElementById(divId).innerHTML += '<div class="day">'+groupNubmer2+'</div>';
            if(obj[i].classes.length==0)
            {
                document.getElementById(divId).innerHTML += '<div class="break"> BRAK ZAJĘĆ </div>';
            }
            else 
            {
            for(j=0;j<obj[i].classes.length;j++)
            {
                document.getElementById(divId).innerHTML += "<b>"+obj[i].classes[j].name+'</br></b><span style="font-size: 10px;">'+obj[i].classes[j].teacher+"</span></br>"+obj[i].classes[j].start+" - "+obj[i].classes[j].stop+"</br>"+obj[i].classes[j].class;	 
            if(j<obj[i].classes.length-1)
            document.getElementById(divId).innerHTML += '<div class="break"> PRZERWA: '+obj[i].classes[j].stop+" - "+obj[i].classes[j+1].start +"</div>";
            }
            
        }}
            
    });
}
var Compare = function()
{ 
    var firstValue = CheckValueSelect3();
    var secondValue = CheckValueSelect4();
    var week1 = CheckValueSelect5();
    var week2 = CheckValueSelect6();
    if(firstValue!="--Wybierz--"&& secondValue!="--Wybierz--")
    {
        if(week1!="--Wybierz--"&& week2!="--Wybierz--")
        {
            CompareContent();
            CreateTableCompare(firstValue,secondValue,week1,week2);
        }
        else
        {
            document.getElementById("content").innerHTML="Wybierz tydzień";
        }
    }
        else
         document.getElementById("content").innerHTML="Wybierz grupę";
        
     
     
}
var ChangeValue = function()
{  
      
    var valueGroup=CheckValueSelect1();
    var valueWeek=CheckValueSelect2();
    BasicContent();
    CreateTable(valueGroup,valueWeek);
    

}
 
 
 

