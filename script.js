
/*preloader*/
var hellopreloader = document.getElementById("hellopreloader_preload");
function fadeOutnojquery(el){
  el.style.opacity = 1;
  var interhellopreloader = setInterval(function(){
    el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ 
      clearInterval(interhellopreloader);
      hellopreloader.style.display = "none";
    }},16);}
  window.onload = function(){
    setTimeout(function(){
      fadeOutnojquery(hellopreloader);},1000);};


    /*яндекс карты*/

ymaps.ready(init);
    var myMap,
        myPlacemark1,
        myPlacemark2;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [53.22095249, 63.61825563],
            zoom: 15.5,
            controls: ['zoomControl']
        });
        
        myPlacemark1 = new ymaps.Placemark([53.22342507, 63.61832000], { 
          balloonContentHeader: 'Офис',
          balloonContentBody: 'Адрес: г. Костанай, ул. Тарана 155 каб.34',
          balloonContentFooter: 'Телефон: +7 (705) 564-87-52',
          hintContent: 'Офис' 
        });
        myPlacemark2 = new ymaps.Placemark([53.21845407, 63.61821250], { 
          balloonContentHeader: 'Магазин',
          balloonContentBody: 'Адрес: г. Костанай, пр. Аль-Фараби 113',
          balloonContentFooter: 'Телефон: +7 (705) 564-87-52',
          hintContent: 'Магазин' 
        });
        myMap.geoObjects.add(myPlacemark1).add(myPlacemark2);
        myMap.behaviors.disable('scrollZoom');
    }