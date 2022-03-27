<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>打金系列工具</h1>
          <h3>地址格式化工具</h3>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >你的地址列表</label
              >
              <textarea
                rows="15"
                class="form-control"
                v-model="addresses"
              ></textarea>
            </div>
            <div class="mb-3" v-if="formatAddresses">
              <h4>结果</h4>
              <textarea rows="15" class="form-control">{{
                formatAddresses
              }}</textarea>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="format"
            >
              格式化
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default {
  name: 'App',
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
        addresses.each((item, index) => {
          formatAddresses.push({
            address: item,
            alias: index + 1 + '_' + group + '_' + item,
          });
        });
        this.formatAddresses = {
          type: 'object',
          data: JSON.stringify(formatAddresses, null, 2),
        };
      } else {
        this.formatAddresses = '';
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
