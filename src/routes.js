const AddressFormator = {
  template: require('./components/AddressFormator.vue'),
};
const AddressBatchCreator = {
  template: require('./components/AddressBatchCreator.vue'),
};

const routes = [
  { path: '/', component: AddressFormator },
  { path: '/address_batch_creator', component: AddressBatchCreator },
];
