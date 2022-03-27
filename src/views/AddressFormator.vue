<template>
  <h3>地址格式化工具</h3>
  <el-form :model="formData" ref="ruleForm" label-width="120px">
    <el-form-item label="你的地址列表" prop="addresses" :rules="[{ required: true, message: '请输入钱包地址' }]">
      <el-input
        v-model="formData.addresses"
        :autosize="{ minRows: 8, maxRows: 15 }"
        type="textarea"
        placeholder="（每行一个地址）"
      ></el-input>
    </el-form-item>
    <el-form-item label="起始钱包序号">
      <el-input-number v-model="formData.initAddressIndex"></el-input-number>
    </el-form-item>
    <el-form-item label="起始组序号">
      <el-input-number v-model="formData.initGroupIndex"></el-input-number>
    </el-form-item>
    <el-form-item label="是否冷却">
      <el-switch v-model="formData.isCooling"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="format">格式化</el-button>
    </el-form-item>
    <div class="mb-3" v-if="formatAddresses">
      <h4>结果</h4>
      <el-input v-model="formatAddresses" :autosize="{ minRows: 8, maxRows: 10 }" type="textarea" readonly></el-input>
    </div>
  </el-form>
</template>
<script>
export default {
  name: 'AddressFormator',
  components: {},
  data() {
    return {
      formData: {
        addresses: '',
        initAddressIndex: 1,
        initGroupIndex: 1,
        isCooling: false,
      },
      formatAddresses: '',
    }
  },
  methods: {
    format() {
      let formatAddresses = []
      if (this.formData.addresses) {
        let addresses = this.formData.addresses.split('\n')
        let group = this.formData.initGroupIndex
        addresses.forEach((item, index) => {
          formatAddresses.push({
            address: item.toLocaleLowerCase(),
            alias: index + this.formData.initAddressIndex + '_' + group + '_' + item.toLocaleLowerCase().slice(-4),
            cooling: this.formData.isCooling,
          })
          if ((index + this.formData.initAddressIndex) % 3 === 0) group++
        })
        this.formatAddresses = JSON.stringify(
          {
            type: 'object',
            data: formatAddresses,
          },
          null,
          2
        )
      } else {
        this.formatAddresses = ''
      }
    },
  },
}
</script>
