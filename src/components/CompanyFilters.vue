<template>
    <div>
        <h3>Filters</h3>
        <div class="filter__block">
            <label>
                Company
                <input v-model="companyValue" type="text" />
            </label>
            <label>
                Level
                <input v-model="levelValue" type="text" />
            </label>
            <label>
                Year
                <input v-model="yearValue" type="number" />
            </label>
            <label>
                Owner
                <input v-model="ownerValue" type="text" />
            </label>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CompanyFilters',

    computed: {
        ...mapGetters(['getCompanyValuestate', 'getLevelValuestate', 'getYearValuestate', 'getOwnerValuestate']),

        companyValue: {
            get() {
                return this.getCompanyValuestate
            },
            set(val) {
                return this.setCompanyValuestate(val)
            },
        },
        levelValue: {
            get() {
                return this.getLevelValuestate
            },
            set(val) {
                return this.setLevelValuestate(val)
            },
        },
        yearValue: {
            get() {
                return this.getYearValuestate
            },
            set(val) {
                return this.setYearValue(val)
            },
        },
        ownerValue: {
            get() {
                return this.getOwnerValuestate
            },
            set(val) {
                return this.setOwnerValuestate(val)
            },
        },
    },
    methods: {
        ...mapActions(['setCompanyValuestate', 'setLevelValuestate', 'setYearValue', 'setOwnerValuestate']),
    },
}
</script>

<style lang="scss" scoped>
</style>