<template>
  <h3>地址格式化工具</h3>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">你的地址列表</label>
      <textarea rows="15" class="form-control" v-model="addresses"></textarea>
    </div>
    <div class="mb-3" v-if="formatAddresses">
      <h4>结果</h4>
      <textarea rows="10" class="form-control">{{ formatAddresses }}</textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="format">
      格式化
    </button>
  </form>
</template>
<script>
export default {
  name: 'AddressBatchCreator',
  components: {},
  data() {
    return {
      addresses: '',
      formatAddresses: '',
    };
  },
  methods: {
    format() {
      let formatAddresses = [];
      if (this.addresses) {
        let addresses = this.addresses.split('\n');
        let group = 1;
        addresses.forEach((item, index) => {
          formatAddresses.push({
            address: item,
            alias: index + 1 + '_' + group + '_' + item.slace(-4),
          });
        });
        this.formatAddresses = JSON.stringify(
          {
            type: 'object',
            data: formatAddresses,
          },
          null,
          2
        );
      } else {
        this.formatAddresses = '';
      }
    },
  },
};
</script>
