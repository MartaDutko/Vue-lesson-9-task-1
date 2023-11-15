<template>
<div class="wrapper">
        <company-filters />
    <companies-list :company-data="getFilterList"/>
    <div class="createCompanyBtn">
        <button @click="onCreate" class="create">Create Company</button>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import CompanyFilters from '@/components/CompanyFilters.vue'
import CompaniesList from '@/components/CompaniesList.vue'
export default {
    name: 'CompanyManager',
    components: {
        CompanyFilters,
        CompaniesList,
    },
    computed: {
        ...mapGetters(['getFilterList']),
    },
    methods: {
        onCreate() {
            this.$router.push({
                name:'company',
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 60%;
    .create{
    color: white;
    border: 0;
    padding: 10px;
    border-radius: 5px;
    background-color: #0074D9;
}
}

</style>