/** @description Przekazuje dane z plików o formacje JSON do widoku. Funkcja wizualizujaca harmongoram dla jednej grupy  
 * @param {object} object Obiekt posiadający właściwości tabGRP i tabWK  
 */

var PutOneGroup = function (object) {

    groupNubmer = 0;
    week = 0;
    for (i = 0; i < 5; i++) {
        if (object.tabGRP[i] != 0) {
            groupNubmer = document.getElementById("Select" + object.tabGRP[i]).value;
            week = document.getElementById("Select" + object.tabWK[i]).value;
        }
    }


    $.getJSON('./Data/' + groupNubmer + '/' + groupNubmer + '_' + week + '.json', function (obj) {

        for (i = 0; i < obj.length; i++) {

            var numberOfDay = i + 1;
            var divId = "d" + numberOfDay;

            document.getElementById(divId).innerHTML += '<div class="day">' + obj[i].day + '</div>';

            if (obj[i].classes.length == 0) {
                document.getElementById(divId).innerHTML += '<div class="break"> BRAK ZAJĘĆ </div>';
            }
            else {
                for (j = 0; j < obj[i].classes.length; j++) {
                    document.getElementById(divId).innerHTML += "<b>" + obj[i].classes[j].name + "</b></br>" + obj[i].classes[j].teacher + "</br>" + obj[i].classes[j].start + " - " + obj[i].classes[j].stop + "</br>" + obj[i].classes[j].class;
                    if (j < obj[i].classes.length - 1)
                        document.getElementById(divId).innerHTML += '<div class="break"> PRZERWA: ' + obj[i].classes[j].stop + " - " + obj[i].classes[j + 1].start + "</div>";
                }

            }
        }
    });
}
/** @description Tworzy nagłowki w dokumencie dla kolumn "grupa tydzien" w trybie porownia dwoch grup
 * @param {object} object Obiekt posiadający właściwości tabGRP i tabWK  
 */
var PutOneDayHeader = function (object) {

    groupNubmer = 0;
    week = 0;
    p = 0;
    for (i = 0; i < 5; i++) {

        if (object.tabGRP[i] != 0) {
            var numberOfDay = p + 1;
            var divId = "d" + numberOfDay;
            p++;

            groupNubmer = document.getElementById("Select" + object.tabGRP[i]).value;
            week = document.getElementById("Select" + object.tabWK[i]).value;
            document.getElementById(divId).innerHTML += '<div class="day">' + groupNubmer + " " + week + '</div>';
        }
    }

}

/** @description Wyswietla nazwe dnia tygodnia dla kilku grup w dokumencie
 * @param {object} object Obiekt posiadający właściwości tabGRP i tabWK  
 */
var PutOneDayCompare = function (object, SelectedDay) {

    if (SelectedDay == 0)
        document.getElementById("NAMEDAY").innerHTML += 'PONIEDZIAŁEK' + '<div class="myButton" style="width: 30px; background-color:#419ddb; float:right" onclick="NextPage()"> >> </div>';
    if (SelectedDay == 1)
        document.getElementById("NAMEDAY").innerHTML += '<div class="myButton" style="width: 30px; background-color:#419ddb; float:left" onclick="BeforePage()"> << </div>' + 'WTOREK' + '<div class="myButton" style="width: 30px; background-color:#419ddb; float:right" onclick="NextPage()"> >> </div>';
    if (SelectedDay == 2)
        document.getElementById("NAMEDAY").innerHTML += '<div class="myButton" style="width: 30px; background-color:#419ddb; float:left" onclick="BeforePage()"> << </div>' + 'ŚRODA' + '<div class="myButton" style="width: 30px; background-color:#419ddb; float:right" onclick="NextPage()"> >> </div>';
    if (SelectedDay == 3)
        document.getElementById("NAMEDAY").innerHTML += '<div class="myButton" style="width: 30px; background-color:#419ddb; float:left" onclick="BeforePage()"> << </div>' + 'CZWARTEK' + '<div class="myButton" style="width: 30px; background-color:#419ddb; float:right" onclick="NextPage()"> >> </div>';
    if (SelectedDay == 4)
    document.getElementById("NAMEDAY").innerHTML += '<div class="myButton" style="width: 30px; background-color:#419ddb; float:left" onclick="BeforePage()"> << </div>' + 'PIĄTEK';


/** @description Wyswietla nazwe grupy i dni tygodnia dla porowniania kilku grup "grupa tydzien"
 * @param {object} object Obiekt posiadający właściwości tabGRP i tabWK  
 */
    PutOneDayHeader(object);
    countOfGroups = GetHowManySelected();
    groupNubmer = 0;
    week = 0;
    k = 0;


    for (i = 0; i < 5; i++) {

        if (object.tabGRP[i] != 0) {

            groupNubmer = document.getElementById("Select" + object.tabGRP[i]).value;
            week = document.getElementById("Select" + object.tabWK[i]).value;

            $.getJSON('./Data/' + groupNubmer + '/' + groupNubmer + '_' + week + '.json', function (obj) {



                var numberOfDay = k + 1;
                var divId = "d" + numberOfDay;
                k++;



                if (obj[SelectedDay].classes.length == 0) {
                    document.getElementById(divId).innerHTML += '<div class="break"> BRAK ZAJĘĆ </div>';
                }
                else {
                    for (j = 0; j < obj[SelectedDay].classes.length; j++) {
                        document.getElementById(divId).innerHTML += "<b>" + obj[SelectedDay].classes[j].name + "</b></br>" + obj[SelectedDay].classes[j].teacher + "</br>" + obj[SelectedDay].classes[j].start + " - " + obj[SelectedDay].classes[j].stop + "</br>" + obj[SelectedDay].classes[j].class;
                        if (j < obj[SelectedDay].classes.length - 1)
                            document.getElementById(divId).innerHTML += '<div class="break"> PRZERWA: ' + obj[SelectedDay].classes[j].stop + " - " + obj[SelectedDay].classes[j + 1].start + "</div>";
                    }

                }
            }
            );











        }
    }



}
/** @description Wstawia do elementu "content" kod html dla wyswietlenia harmonogramu pojedynczej grupy
 */
var OneGroupContent = function () {

    document.getElementById("content").innerHTML = '<div style="width:98%;margin: 0 auto;margin-left:30px"><div id ="d1" class="first"></div><div id ="d2"class="second"></div><div id ="d3" class="first">  </div><div id ="d4" class="second"></div><div id ="d5" class="first"></div></div> '
}
/** @description Wstawia do elementu "content" kod html dla wyswietlenia porownania trzech grup
 */
var ThreeGroupContent = function () {

    document.getElementById("content").innerHTML = '<div id="NAMEDAY"></div><div style="width:60%;margin: 0 auto;margin-left:280px"><div></div><div id ="d1" class="first"></div><div id ="d2"class="second"></div><div id ="d3" class="first">  </div><div id ="d4" class="second"></div><div id ="d5" class="first"></div></div> '
}
/** @description Wstawia do elementu "content" kod html dla wyswietlenia porownania czterech grup
 */
var FourGroupContent = function () {

    document.getElementById("content").innerHTML = '<div id="NAMEDAY"></div><div style="width:80%;margin: 0 auto;margin-left:150px"><div></div><div id ="d1" class="first"></div><div id ="d2"class="second"></div><div id ="d3" class="first">  </div><div id ="d4" class="second"></div><div id ="d5" class="first"></div></div> '
}
/** @description Wstawia do elementu "content" kod html dla wyswietlenia porownania pieciu grup
 */
var FiveGroupContent = function () {

    document.getElementById("content").innerHTML = '<div id="NAMEDAY"></div><div style="width:98%;margin: 0 auto;margin-left:30px"><div></div><div id ="d1" class="first"></div><div id ="d2"class="second"></div><div id ="d3" class="first">  </div><div id ="d4" class="second"></div><div id ="d5" class="first"></div></div> '
}
/** @description Wstawia do elementu "content" kod html dla wyswietlenia porownania dwoch grup
 */
var TwoGroupContent = function () {
    document.getElementById("content").innerHTML = '<div style="width:100%;margin: 0 auto;margin-left:5px"><span id="CompareContent"><div id ="d1" class="day2"></div><div id ="d2"class="day2"></div><div id ="d3" class="day2">  </div><div id ="d4" class="day2"></div><div id ="d5" class="day2"></div><div style="clear:both;"></div><div id ="dv1" class="firstC"></div><div id ="dv2"class="secondC"></div><div id ="dv3" class="firstC">  </div><div id ="dv4" class="secondC"></div><div id ="dv5" class="firstC"></div><div id ="dv6" class="secondC"></div><div id ="dv7" class="firstC"></div><div id ="dv8" class="secondC"></div><div id ="dv9" class="firstC"></div><div id ="dv10" class="secondC"></div> <div style="clear:both;"></div></span></div>'

}
/** @description Wstawia do dokumentu nazwy dni tygodnia dla trybu porownania dwoch grup
 */
var PutNameOfDays = function () {
    var Week = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];
    for (i = 0; i < 5; i++) {
        var id = i + 1;
        var divId = "d" + id;
        document.getElementById(divId).innerHTML = Week[i];

    }
}
/** @description Wyswietla dane z plikow JSON w tabeli w trybie porownania dwoch grup
 * @param {object} object Obiekt posiadający właściwości tabGRP i tabWK  
 */
var PutTwoGroupCompare = function (object) {
    PutNameOfDays();

    groupNubmer1 = 0;
    week1 = 0;
    groupNubmer2 = 0;
    week2 = 0;
    for (i = 0; i < 5; i++) {
        if (object.tabGRP[i] != 0) {
            if (groupNubmer1 == 0) {
                groupNubmer1 = document.getElementById("Select" + object.tabGRP[i]).value;
                week1 = document.getElementById("Select" + object.tabWK[i]).value;
            }
            else {
                groupNubmer2 = document.getElementById("Select" + object.tabGRP[i]).value;
                week2 = document.getElementById("Select" + object.tabWK[i]).value;
            }
        }
    }

    var numberOfDay1 = 1;
    var numberOfDay2 = 2;
    $.getJSON('./Data/' + groupNubmer1 + '/' + groupNubmer1 + '_' + week1 + '.json', function (obj) {

        for (i = 0; i < obj.length; i++) {

            var divId = "dv" + numberOfDay1;
            numberOfDay1 = numberOfDay1 + 2;
            document.getElementById(divId).innerHTML += '<div class="day">' + groupNubmer1 + ' ' +week1+ '</div>';
            if (obj[i].classes.length == 0) {
                document.getElementById(divId).innerHTML += '<div class="break"> BRAK ZAJĘĆ </div>';
            }
            else {
                for (j = 0; j < obj[i].classes.length; j++) {
                    document.getElementById(divId).innerHTML += "<b>" + obj[i].classes[j].name + '</br></b><span style="font-size: 10px;">' + obj[i].classes[j].teacher + "</span></br>" + obj[i].classes[j].start + " - " + obj[i].classes[j].stop + "</br>" + obj[i].classes[j].class;
                    if (j < obj[i].classes.length - 1)
                        document.getElementById(divId).innerHTML += '<div class="break"> PRZERWA: ' + obj[i].classes[j].stop + " - " + obj[i].classes[j + 1].start + "</div>";
                }

            }
        }
    });

    $.getJSON('./Data/' + groupNubmer2 + '/' + groupNubmer2 + '_' + week2 + '.json', function (obj) {

        for (i = 0; i < obj.length; i++) {

            var divId = "dv" + numberOfDay2;
            numberOfDay2 = numberOfDay2 + 2;
            document.getElementById(divId).innerHTML += '<div class="day">' + groupNubmer2 + ' '+week2+ '</div>';
            if (obj[i].classes.length == 0) {
                document.getElementById(divId).innerHTML += '<div class="break"> BRAK ZAJĘĆ </div>';
            }
            else {
                for (j = 0; j < obj[i].classes.length; j++) {
                    document.getElementById(divId).innerHTML += "<b>" + obj[i].classes[j].name + '</br></b><span style="font-size: 10px;">' + obj[i].classes[j].teacher + "</span></br>" + obj[i].classes[j].start + " - " + obj[i].classes[j].stop + "</br>" + obj[i].classes[j].class;
                    if (j < obj[i].classes.length - 1)
                        document.getElementById(divId).innerHTML += '<div class="break"> PRZERWA: ' + obj[i].classes[j].stop + " - " + obj[i].classes[j + 1].start + "</div>";
                }

            }
        }

    });
}
/** @description Pobiera wartosc elementu select dla grupy
 * @param {selectNumber} selectNumber numer listy rozwijalnej 
 * @returns {valueGroup} 
 */
var GetGroup = function (selectNumber) {
    var valueGroup = document.getElementById("Select" + selectNumber).value;
    return valueGroup;
}
/** @description Pobiera wartosc elementu select dla tygodnia
 * @param {selectWeek} selectWeek numer listy rozwijalnej 
 * @returns {valueWeek} 
 */
var GetkWeek = function (selectWeek) {
    var valueWeek = document.getElementById("Select" + selectWeek).value;
    return valueWeek;
}
/** @description Sprawdza ktore sekcje w dokumencie z listami rozwijalnymi sa w pelni zaznaczone (grupa tydzien) i zwaraca tablice jest z 5 elementami jesli 1 to grupa w danej sekcji wybranae jest 0 to nie
 * @returns {tab} 
 */
var GetAllSelects = function () {
    var x = 11;
    var y = 12;
    var a = 0;
    var b = 0;
    var tab = [0, 0, 0, 0, 0]
    for (i = 0; i < 5; i++) {
        a = GetGroup(x);
        b = GetkWeek(y);
        if (a != "Wybierz" && b != "Wybierz")
            tab[i] = 1;
        x = x + 10;
        y = y + 10;



    }
    return tab;
}
/** @description Sprawdza ile grup jest wybranych to wyswietlenia ich harmonogramow
 * @returns {ile} 
 */
var GetHowManySelected = function () {
    x = GetAllSelects();
    ile = 0;


    for (i = 0; i < 5; i++) {
        if (x[i] == 1) ile = ile + 1;

    }
    return ile;

}


/** @description Tworzy obiekt posiadajacy dwie tablice w ktorej zapisane sa wszystkie id list rozwijalnych ktore zostaly wybrane, obk.tabGRP i obj.tabWK
 * @param {tab} tab tablica zwrocona z funkcji GetAllSelects
 * @returns {obj} 
 */
var GetValuesOfSelect = function (tab) {
    obj = { tabGRP: [0, 0, 0, 0, 0], tabWK: [0, 0, 0, 0, 0] };
    x = 11;
    y = 12;
    for (i = 0; i < 5; i++) {
        if (tab[i] == 1) {
            obj.tabGRP[i] = x;
            obj.tabWK[i] = y;

        }
        else {
            obj.tabGRP[i] = 0;
            obj.tabWK[i] = 0;
        }
        x = x + 10;
        y = y + 10;

    }
    return obj;

}
/**  
    @type {int}  
*/  
var PAGE = 0;
/** @description zwieksza zmienna PAGE o 1 i wywoluje funkcje ExecuteView(0);
 */
var NextPage = function () {
    PAGE = PAGE + 1;
    ExecuteView(0);
}
/** @description zmniejsza zmienna PAGE o 1 i wywoluje funkcje ExecuteView(0);
 */
var BeforePage = function () {
    PAGE = PAGE - 1;
    ExecuteView(0);
}


/** @description wywoluje GetValuesOfSelect(GetAllSelets()) sprawdza ile grup zostalo wybranych i wyswietla odpowidni widok
 * @param {flag} flag jestli 0 to wywolanie dla kolejnego widoku dnia PAGE +1 jesli 1 widok dla poniedzialki PAGE = 0
 */
var ExecuteView = function (flag) {
    if (flag == 1) PAGE = 0;
    obj = GetValuesOfSelect(GetAllSelects());

    if (GetHowManySelected() == 1) {
        OneGroupContent();
        PutOneGroup(obj);

    }

    else if (GetHowManySelected() == 2) {
        TwoGroupContent();
        PutTwoGroupCompare(obj);

    }
    else if (GetHowManySelected() == 3) {
        ThreeGroupContent();
        PutOneDayCompare(obj, PAGE);
    }
    else if (GetHowManySelected() == 4) {
        FourGroupContent();
        PutOneDayCompare(obj, PAGE);
    }
    else if (GetHowManySelected() == 5) {
        FiveGroupContent();
        PutOneDayCompare(obj, PAGE);
    }




}

window.onload = function () {
    document.getElementById("OK").onclick = function fun() {
        ExecuteView(1);
    }
};