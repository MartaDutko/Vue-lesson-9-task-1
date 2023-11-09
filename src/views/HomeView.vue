<template>
  <div class="home">
    <company-manager/>
  </div>
</template>

<script>
import CompanyManager from '@/components/CompanyManager.vue';



export default {
  name: "HomeView",
  components: {
    CompanyManager

  },
};
</script>
