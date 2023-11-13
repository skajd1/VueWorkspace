import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { selectAll, selectOne, insert, deleteOne, update } from "../api/customer.js";

const useCustomerStore = defineStore("useCustomerStore", () => {
  //1. state
  const customers = ref([]);
  const customer = ref({});
  //2. action
  const allCustomer = () => {
    selectAll(
      (res) => {
        customers.value = res.data;
      },
      (e) => {
        console.log(e);
      }
    );
  };
  const insertCustomer = (num, name, address) => {
    insert(
      { num: num, name: name, address: address },
      (res) => {
        allCustomer();
      },
      (e) => {
        console.log(e);
      }
    );
  };
  const deleteCustomer = (num) => {
    deleteOne(
      num,
      (res) => {
        allCustomer();
      },
      (e) => {
        console.log(e);
      }
    );
  };
  const selectOneCustomer = (num) => {
    selectOne(
      num,
      (res) => {
        customer.value = res.data;
      },
      (e) => {
        console.log(e);
      }
    );
  };
  const updateCustomer = (c) => {
    update(
      { num: c.num, name: c.name, address: c.address },
      () => {
        allCustomer();
      },
      (e) => {
        console.log(e);
      }
    );
  };

  //3. getter
  const all = computed(() => customers.value);
  const one = computed(() => customer.value);
  return {
    allCustomer,
    insertCustomer,
    deleteCustomer,
    selectOneCustomer,
    updateCustomer,
    all,
    one,
  };
});

export { useCustomerStore };
