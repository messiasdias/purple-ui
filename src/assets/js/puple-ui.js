import $ from 'jquery'

var dropdown_menu = null 
var dropdown_submenu = null

var breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
}

$(document).ready(()=> {
    
    $(this).click((event) => {
        if($('#drowpcard').css('display') === 'block') $('#drowpcard').hide();
        if( event.target.parentElement.nodeName.toLowerCase() !== 'li' && (dropdown_menu !== null | dropdown_submenu !== null) ){
            dropdown_menu_active() 
            dropdown_submenu_active()
        }
    })

    $('.menutoggle').click((event) => {
        if($(document).width() < breakpoints.lg ){
            $('.sidebar').hide()
        }
        $('.menu').toggle()
    })


    $('li.dropdown-menu>a').click((event) => {
        dropdown_menu_active(event.target.parentElement)
    })

    $('li.dropdown-menu>ul>li').click((event) => {
        dropdown_submenu_active(event.target.parentElement)
    })

    $('.sidebartoggle').click((event) => {
        window.scrollTo(500, 0);
        if($(document).width() < breakpoints.lg ){
            $('.menu').hide()
        }
        $('.sidebar').toggle()
    })

    init()
} )


$(window).resize( () =>{
    init()
})




function init(){
    dropdown_menu_setHash()
    dropdown_submenu_setHash()
    dropdown_menu_active() 
    dropdown_submenu_active()
    
    if($(document).width() >= breakpoints.lg ){
        $('.menu').show()
    }else{
        $('.menu').hide()
    }
}

function show(el){
    setTimeout(() =>{
        $(el).show()
    },100)
}


function dropdown_menu_active(el=null) 
{
    $('li.dropdown-menu').filter( ch => {
        let li =  $('li.dropdown-menu')[ch]
        if( $(li).hasClass('active') ) {
            menu_toggle_ul(li, false)
            menu_active_class(li, 'menu', false)
        }
    })

    if( el !== null){
        let active = ( $(el).attr('hash') === dropdown_menu ) ?  false : true
        menu_toggle_ul(el, active)
        menu_active_class(el,'menu', active)
        dropdown_menu = active ? $(el).attr('hash') : null
    }else{
        dropdown_menu = null
    }
}



function dropdown_submenu_active(el=null)
{
    $('li.dropdown-menu>.dropdown-submenu>li').filter( ch => {
        let li = $('li.dropdown-menu>.dropdown-submenu>li')[ch]
        if( $(li).hasClass("active") ){
            menu_toggle_ul(li, false)
            menu_active_class(li, 'submenu')
        }
    })

    if(el !== null){
        let active = ( $(el).attr('hash') === dropdown_submenu ) ?  false : true
        menu_toggle_ul(el, active)
        menu_active_class(el, 'submenu', active)
        dropdown_submenu = active ? $(el).attr('hash') : null
    }else{
        dropdown_submenu = null
    }
}


function hashCode(str) {
    return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
}

function dropdown_menu_setHash(){
    $('li.dropdown-menu').filter( ch => {
        let li =  $('li.dropdown-menu')[ch]
        $(li).attr('hash', hashCode('dropdown-menu'+ch) )
    })
}


function dropdown_submenu_setHash(){
    $('li.dropdown-menu>.dropdown-submenu>li').filter( ch => {
        let li = $('li.dropdown-menu>.dropdown-submenu>li')[ch]
        $(li).attr('hash', hashCode('dropdown-submenu'+ch) )
    })
}

function dropdown_menu_children(el) 
{
    let children = null
    $(el.childNodes).each( (ch) => {
        if( el.childNodes[ch].nodeName.toLowerCase() === 'svg' ) {
            children = el.childNodes[ch]
        }
    })
    return children
}


function dropdown_submenu_children(el) 
{
    let children = null
    $(el.childNodes).each( (i) => {
        if( el.childNodes[i].nodeName.toLowerCase() === 'a' ) {
            $(el.childNodes[i].childNodes).each( (j) => {
               if( el.childNodes[i].childNodes[j].nodeName.toLowerCase() === 'svg' ){
                    children = el.childNodes[i].childNodes[j]
               }
            })
        }
    })
    return children
}


function menu_active_class(el, type=null, active=false){
   
    if(active){
        $(el).addClass('active')
    }else{
        $(el).removeClass('active')
    }

    let children = null
    if (type === null) type = 'menu'

    if(type.toLowerCase() === 'submenu'){
        children = dropdown_submenu_children(el)
    }  
    if(type.toLowerCase() === 'menu'){
        children = dropdown_menu_children(el)
    }

    if(children !== null) {
        menu_active_indicator(children, active)
    }
}


function menu_active_indicator(children=null, active=false)
{
    if( (children !== null) ){
        if(active){
            $(children).removeClass('fa-angle-right')
            $(children).addClass('fa-angle-down')
        }else{
            $(children).removeClass('fa-angle-down')
            $(children).addClass('fa-angle-right')
        }
    }
}


function menu_reset_indicator(){
    if($(document).width() < breakpoints.lg) {
        $('.fa-angle-down').filter( svg =>{
            let icon = $('.fa-angle-down')[svg]
            console.log(icon)
            $(icon).removeClass('fa-angle-down')
            $(icon).addClass('fa-angle-right')
        })
    }
}


function menu_toggle_ul(el, active=false) 
{
    $(el.childNodes).filter( i => {
        if( $(el.childNodes)[i].nodeName.toLowerCase() === 'ul' ){
            if(active){
                $(el.childNodes[i]).show() 
            }else{
                $(el.childNodes[i]).hide() 
            }
        }
    })
}





