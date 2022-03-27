<template>
  <h3>助记词钱包批量生成</h3>
  <el-alert title="可断网离线生成" type="success" class="mb-3" />
  <el-container>
    <el-header>
      <el-form :model="formData" ref="ruleForm" label-width="120px">
        <el-form-item label="你的助记词" prop="mnemonic" :rules="[{ required: true, message: '请输入助记词' }]">
          <el-input v-model="formData.mnemonic" :autosize="{ minRows: 8, maxRows: 15 }" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="生成数量:" prop="num" :rules="[{ required: true, message: '数量不能为空' }]">
          <el-input v-model="formData.num" type="number" placeholder="数量" @keyup.native="keyupEvent()"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createAddress" :loading="loading">一键生成</el-button>
          <el-button type="danger" @click="resetForm('ruleForm')" :disabled="loading">重置表单</el-button>
        </el-form-item>
        <el-form-item>
          <download-excel
            class="export-excel-wrapper"
            :data="tableData"
            :fields="json_fields"
            title="BSC钱包批量生成"
            :name="fileName"
          >
            <el-button type="success">导出EXCEL</el-button>
          </download-excel>
          <!-- moment().format();-->
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="index" label="序号" width="80"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script>
let ethers = require('ethers')
import moment from 'moment'
export default {
  name: 'AddressBatchCreator2',
  components: {},
  data() {
    return {
      tableData: [],
      loading: false,
      fileName: 'BSC钱包批量生成' + moment().format('YYYY-MM-DD') + '.xls',
      formData: {
        num: 20,
        mnemonic: '',
      },
      json_fields: {
        序号: 'index',
        地址: 'address',
      },
    }
  },
  methods: {
    keyupEvent() {
      this.formData.num = this.formData.num.replace(/^(0+)|[^\d]+/g, '')
    },
    batch(count, startIndex = 0) {
      let seed = bip39.mnemonicToSeedSync(this.formData.mnemonic)
      let hdWallet = hdkey.fromMasterSeed(seed)

      console.log('助记词:' + this.formData.mnemonic)

      for (let i = startIndex; i < startIndex + count; i++) {
        let key = hdWallet.derivePath(`m/44'/60'/0'/0/${i}`)
        let address = util.toChecksumAddress('0x' + util.pubToAddress(key._hdkey._publicKey, true).toString('hex'))
        console.log('地址:' + address)
      }
    },
  },
}
</script>
