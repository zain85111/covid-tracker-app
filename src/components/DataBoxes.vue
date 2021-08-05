<template>
    <div class="row">
        <div class="col s12 m6 ">
            <div class="card blue accent-1 z-depth-2">
                <div class="card-content white-text center">
                <span class="card-title"><b>Cases</b></span>
                    <div>
                        <p><span><b>New: </b> </span>{{numberCommas(stats.NewConfirmed)}}</p>
                        <p><span><b>Total: </b></span>{{numberCommas(stats.TotalConfirmed)}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col s12 m6">
            <div class="card red accent-2 z-depth-2">
                <div class="card-content white-text center">
                <span class="card-title"><b>Deaths</b></span>
                    <div>
                        <p><span><b>New: </b></span>{{numberCommas(stats.NewDeaths)}}</p>
                        <p><span><b>Total: </b></span>{{numberCommas(stats.TotalDeaths)}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col s12 m12">
            <div class="card green  lighten-2 ">
                <div class="card-content white-text center">
                <span class="card-title"><b>Recovered</b></span>
                    <div>
                        <p><span><b>New: </b></span>{{numberCommas(stats.NewRecovered)}}</p>
                        <p><span><b>Total: </b></span>{{numberCommas(stats.TotalRecovered)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DataBoxes',
    props:['stats'],
    methods:{
        numberCommas(x){
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
}
</script>