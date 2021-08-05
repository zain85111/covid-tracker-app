<template>
    <div class="center">
        <h5><b>{{text}}</b></h5>
        <p>{{timestamp}}</p>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name:"DataTitle",
    props:['text','date'],
    computed:{
        timestamp: function(){
            return moment(this.date).format("Do MMMM YYYY, h:mm:ss a")
        }
    }
}
</script>