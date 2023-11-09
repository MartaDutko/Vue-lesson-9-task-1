import { createStore } from "vuex";

export default createStore({
  state: {
    companiesList: [
      {
        id: 1,
        companyName: 'Company A',
        level: 'M',
        yearOfEstablishment: 2005,
        owner: 'John Doe'
      },
      {
        id: 2,
        companyName: 'Company B',
        level: 'L',
        yearOfEstablishment: 1998,
        owner: 'Jane Smith'
      },
      {
        id: 3,
        companyName: 'Company C',
        level: 'S',
        yearOfEstablishment: 2010,
        owner: 'Sam Joson'
      },
      {
        id: 4,
        companyName: 'Company D',
        level: 'M',
        yearOfEstablishment: 2002,
        owner: 'Emily Davis'
      },
      {
        id: 5,
        companyName: 'Company E',
        level: 'L',
        yearOfEstablishment: 1995,
        owner: 'Liss Wilson'
      },
      {
        id: 6,
        companyName: 'Company F',
        level: 'S',
        yearOfEstablishment: 2012,
        owner: 'Sarah Brown'
      },
      {
        id: 7,
        companyName: 'Company G',
        level: 'M',
        yearOfEstablishment: 2008,
        owner: 'David Taylor'
      },
    ],

    filterObj: {
      companyValue: null,
      levelValue: null,
      yearValue: null,
      ownerValue: null
    }
  },
  getters: {
    // отримання значень полів в об'єктa filterObj
    getCompanyValuestate: state => state.filterObj.companyValue,
    getLevelValuestate: state => state.filterObj.levelValue,
    getYearValuestate: state => state.filterObj.yearValue,
    getOwnerValuestate: state => state.filterObj.ownerValue,

    // фільтрування компаній
    getFilterList: ({ filterObj, companiesList }) => {
      const {
        companyValue,
        levelValue,
        yearValue,
        ownerValue
      } = filterObj;

      if (companyValue || levelValue || yearValue || ownerValue) {
        return companiesList.filter((item) => {
          return (
            (!companyValue || item.companyName.toLowerCase().includes(companyValue.toLowerCase())) &&
            (!levelValue || item.level.toLowerCase() === levelValue.toLowerCase()) &&
            (!yearValue || item.yearOfEstablishment.toString().includes(yearValue.toString())) &&
            (!ownerValue || item.owner.toLowerCase().includes(ownerValue.toLowerCase()) )
          );
        });
      } else {
        return companiesList;
      }
    },

    // отримання масиву компаній
    getCompaniesList: ({ companiesList }) => companiesList,

    getUserById: (state) => {
      return (userId) => {
        return { ...state.companiesList.find((item) => item.id == userId) }
      }
    },
  },
  mutations: {
    // заміна значень полів в об'єктa filterObj
    setCompanyValuestate(state, val) {
      state.filterObj.companyValue = val
    },
    setLevelValuestate(state, val) {
      state.filterObj.levelValue = val
    },
    setYearValue(state, val) {
      state.filterObj.yearValue = val
    },
    setOwnerValuestate(state, val) {
      state.filterObj.ownerValue = val
    },

    // редагування користувача
    editUser(state, val) {
      let currentIndex = state.companiesList.findIndex(item => item.id === val.id)
      state.companiesList[currentIndex] = { ...val }
    },
    // cтворення нового користувача
    createUser(state, val) {
      state.companiesList.push({ ...val })
    },
    // видалення користувача
    deleteUser(state, id) {
      state.companiesList = state.companiesList.filter(item => item.id !== id)
    }

  },
  actions: {
    // заміна значень полів в об'єктa filterObj
    setCompanyValuestate({ commit }, val) {
      commit('setCompanyValuestate', val)
    },
    setLevelValuestate({ commit }, val) {
      commit('setLevelValuestate', val)
    },
    setYearValue({ commit }, val) {
      commit('setYearValue', val)
    },
    setOwnerValuestate({ commit }, val) {
      commit('setOwnerValuestate', val)
    },

    // редагування користувача
    editUser({ commit }, val) {
      commit('editUser', val)
    },

    // cтворення нового користувача
    createUser({ commit }, val) {
      commit('createUser', val)
    },
    // видалення користувача
    deleteUser({ commit }, id) {
      commit('deleteUser', id)
    }

  },
  modules: {},
});
