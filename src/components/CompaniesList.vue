<template>
    <hr />
    <h3>Companies list</h3>
    <div class="wrapper__list">
        <div v-for="company in companyData" :key="company.id" class="block-item">
            <company-item :company-info="company" />
        </div>
    </div>
    <hr />
</template>

<script>
import CompanyItem from './CompanyItem.vue'
export default {
    name: 'CompaniesList',
    components: { CompanyItem },
    props: {
        companyData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.wrapper__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>