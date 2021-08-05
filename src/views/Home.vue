<template>
  <main v-if="!loading">
    <DataTitle :text="title" :date="date" />
    <DataBoxes :stats='stats'/>
    <CountrySelect @get-country="getCountryData" :countries='countries'/>
  </main>
  <main  v-else>
    <div class="container center">
      <h5>Fetching Data</h5>
      <img :src="loadingImage" class="" alt="">
    </div>
  </main>
</template>

<script>
import DataTitle from '@/components/DataTitle'
import DataBoxes from '@/components/DataBoxes'
import CountrySelect from '@/components/CountrySelect'

export default {
  name: 'Home',
  components:{
    DataTitle,
    DataBoxes,
    CountrySelect
  },
  data(){
    return{
      loading: true,
      title: 'Global',
      date:"",
      stats:{},
      countries:[],
      loadingImage:require('../assets/hourglass.gif')
    }
  },
  methods:{
    async fetchCovidData(){
      const res = await fetch('https://api.covid19api.com/summary')
      const data = await res.json()
      return data
    },
    getCountryData(country){
      this.stats = country
      this.title = country.Country
    }
  },
  async created(){
    const data = await this.fetchCovidData()
    this.date = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false
    // console.log(data)
  }
}
</script>
