<template>
    <div class="block__form">
        <label>
            Company
            <input v-model="currentObject.companyName" type="text" />
        </label>
        <label>
            Level
            <input v-model="currentObject.level" type="text" />
        </label>
        <label>
            Year
            <input v-model="currentObject.yearOfEstablishment" type="number" />
        </label>
        <label>
            Owner
            <input v-model="currentObject.owner" type="text" />
        </label>
        <button v-if="userId" @click="onSave" class="btn">Save</button>
        <button v-else @click="onCreate" class="btn" >Create</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CompanyEdition',
    data() {
        return {
            currentObject: {
                companyName:null,
                level:null,
                yearOfEstablishment:null,
                owner:null
            },
        }
    },
    computed: {
        ...mapGetters(['getUserById']),
        userId() {
            return this.$route.params.id
        },
        isEmpty() {
            let { companyName, level, yearOfEstablishment, owner } = this.currentObject
            return (companyName && level && yearOfEstablishment && owner)
        },
    },
    methods: {
        ...mapActions(['editUser', 'createUser']),
        onSave() {
            this.editUser(this.currentObject)
            this.$router.push({
                name: 'home',
            })
        },
        onCreate() {
            if (this.isEmpty) {
                this.currentObject = {
                    ...this.currentObject,
                    id: new Date().getMilliseconds(),
                }
                this.createUser(this.currentObject)
                this.$router.push({
                    name: 'home',
                })
            }
        },
    },

    created() {
        this.currentObject = this.getUserById(this.userId)
    },
}
</script>

<style lang="scss" scoped>
.block__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
        margin-left: 10px;
    }
    .btn{
        width: 10%;
        padding: 10px;
        color: white;
        border: 0;
        border-radius: 5px;
        background-color: #FF4136;
    }
}
</style>