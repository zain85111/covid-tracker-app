<template>
    <div class="row">
        <div class="col s6 m3">
            <select v-model="seleced"  @change="onChange()" class="btn white black-text" >
                <option value="0"  selected>Select Country</option>
                <option :key="country.ID" v-for="country in countries" :value="country.ID"  >{{ country.Country}}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name:'CountrySelect',
    props:['countries'],
    data(){
        return {
            selected:0,
        }
    },
    methods:{
        onChange(){
            console.log("Ayaaaaaaaaaaa")
            console.log(countries)
            const country = this.countries.find((item) => item.ID === this.selected)
            console.log(country)
            this.$emit('get-country', country)
        }
    },
}

</script>