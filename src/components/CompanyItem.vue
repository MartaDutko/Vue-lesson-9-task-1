<template>
    <div class="company-info">
        <span>{{ companyInfo.companyName }}</span>
        <span>{{ companyInfo.level }}</span>
        <span>{{ companyInfo.taxation }}</span>
        <span>{{ companyInfo.yearOfEstablishment }}</span>
        <span>{{ companyInfo.owner }}</span>
        <div class="block-btn">
            <button class="btn-delete" @click="onDelete(companyInfo.id)">Delit</button>
            <button class="btn-edit" @click="onEdit(companyInfo.id)">Edit</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'CompanyItem',
    props: {
        companyInfo: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        ...mapActions(['deleteUser']),
        onDelete(id) {
            console.log(id)
            this.deleteUser(id)
        },
        onEdit(id) {
            this.$router.push({
                name:'company',
                params:{id:id}
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.company-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    .block-btn {
        display: flex;
        gap: 10px;
        button {
            padding: 8px;
            border: 0;
            border-radius: 5px;
            color: white;
        }
        button:hover {
            color: black;
        }
        .btn-delete {
            background-color: #FF6347;
        }
        .btn-edit {
            background-color: #4CAF50 ;
        }
    }
}
</style>