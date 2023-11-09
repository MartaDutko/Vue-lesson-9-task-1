import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import InfoContact from "@/views/InfoContact.vue";
import CompanyEdition from "@/components/CompanyEdition.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/info_contacts",
    name: "informationContacts",
    component: InfoContact,
  },
  {
    path: "/company/:id?",
    name: "company",
    component: CompanyEdition,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
