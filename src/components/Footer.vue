<template>
<footer>
    <div id="left">
        <p>&copy; 2020 <b>{{description}}</b> All right reserved.</p>
    </div>
    <div id="right">
        <ul>
            <li>
                <span onclick="show('#drowpcard')" ><img src="https://preview.webpixels.io/purpose-application-ui-kit/assets/img/icons/flags/ro.svg" alt=""> <b>Romeno</b> </span>

                 <ul id="drowpcard" class="card modal" >
                     <li> <img src="https://preview.webpixels.io/purpose-application-ui-kit/assets/img/icons/flags/es.svg" /> <a href="#">Spanish</a></li>
                     <li> <img src="https://preview.webpixels.io/purpose-application-ui-kit/assets/img/icons/flags/us.svg" /> <a href="#">English</a></li>
                     <li> <img src="https://preview.webpixels.io/purpose-application-ui-kit/assets/img/icons/flags/gr.svg" /> <a href="#">Greek</a></li>   
                 </ul>   

            </li>

            <li><a href="#">Support</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
        </ul>
    </div>
</footer>
</template>
<script>
export default {
    name: 'Footer',
    props:{
        description: {
            type: String,
            default: 'PurpleUI'
        }
    }
}
</script>