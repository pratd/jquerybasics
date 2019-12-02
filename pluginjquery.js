(function ($){
    $.fn.welcome = function( options ){
        //Default options
        var defaults={
            name:"John",
            surname:"Doe",
            position:"Left",
            BackgroundColor: "White",
            color: "black"
        }
        var settings = $.extend({}, defaults, options );
        //applying options
        this.append(function(){
            var $parentdiv = $(document.createElement('div')).attr({id:"welcome", class: 'row'});
            if (settings.position == 'Left'){
                var $imagediv = $(document.createElement('div')).attr({id:'image', class:'col-sm-4'}).append(
                        $(document.createElement('img')).attr({class:'img-fluid', src:'leftorright.jpg', height:'50'}));
                var $maindiv = $(document.createElement('div')).attr({id:'main', class:'col-sm-7'}).append(
                        $(document.createElement('h2')).text(settings.name + '  ' + settings.surname));
            }else{
                var $imagediv = $(document.createElement('div')).attr({id:'image', class:'col-sm-7'}).append(
                        $(document.createElement('h2')).text(settings.name + '  ' + settings.surname));
                var $maindiv = $(document.createElement('div')).attr({id:'main', class:'col-sm-4'}).append(
                        $(document.createElement('img')).attr({class:'img-fluid', src:'leftorright.jpg',height:'50'}));
            }
            $parentdiv.append($imagediv);
            $parentdiv.append($maindiv.css('Color','blue'));
            return $parentdiv;
            
        });
       // return this.append( settings.name + ',' + settings.surname + '!')
        this.css({color: settings.color, 'background-color':settings.BackgroundColor});
        return this;
    };
}(jQuery));

$(document).ready(function(){
    $("div").welcome({
        name:'Prattya',
        surname:'Datta',
        position:'Left', //tochange the position of the image
        BackgroundColor:'#FEFFF1'
    });
});