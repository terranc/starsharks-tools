<template>
  <h3>钱包批量生成</h3>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">你的助记词</label>
      <textarea rows="15" class="form-control" v-model="words"></textarea>
    </div>
    <div class="mb-3" v-if="addresses">
      <h4>结果</h4>
      <textarea rows="10" class="form-control">{{ addresses }}</textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="generate">
      生成
    </button>
  </form>
</template>
<script>
export default {
  name: 'AddressBatchCreator',
  components: {},
  data() {
    return {
      words: '',
      addresses: '',
    };
  },
  methods: {
    generate() {},
  },
};
</script>
