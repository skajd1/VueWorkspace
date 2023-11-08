import myaxios from "../utils/axios-common.js";

function selectAll(success, fail) {
  myaxios.get(`/customers`).then(success).catch(fail);
}

function selectOne(num, success, fail) {
  myaxios.get(`/customers/${num}`).then(success).catch(fail);
}
function insert(customer, success, fail) {
  myaxios.post(`/customers`, customer).then(success).catch(fail);
}
function deleteOne(num, success, fail) {
  myaxios.delete(`/customers/${num}`).then(success).catch(fail);
}
function update(customer, success, fail) {
  myaxios.update(`/customers`, customer).then(success).catch(fail);
}
function searchByAddress(address, success, fail) {
  myaxios.get(`/customers/address/${address}`).then(success).catch(fail);
}

export { selectAll, selectOne, insert, deleteOne, update, searchByAddress };
