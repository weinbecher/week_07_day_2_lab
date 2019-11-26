import Vue from  'vue';
document.addEventListener('DOMContentLoaded',()=>{
  new Vue({
    el: '#app',
    data :{
      sayHi: "Hi, Traveller",
      countries: [],
      countryNameToSearch: "",
      foundCountry: "",
    },
    mounted() {
      this.fetchCountries()
    },
    methods: {
      fetchCountries: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")//NEW
        // console.log(request)
        .then(res => res.json())
        .then(countries => this.countries = countries)
      },

      updateCountry: function(){
        this.countryToSearch = this.countryToSearch
      },

      searchCountry: function(){
       const countryArray = this.countries.filter((country)=>{
         return country.name == this.countryNameToSearch})
         this.foundCountry = countryArray[0]

      }

    },

    computed: {

      totalPopulation: function(){
        return this.countries.reduce((total,country) => total + country.population, 0)},



    }


  })
});
