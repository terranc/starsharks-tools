<template>
  <h3>助记词钱包批量生成</h3>
  <el-alert title="可断网离线生成" type="success" class="mb-3" />
  <el-container>
    <el-main>
      <el-form :model="formData" ref="ruleForm" label-width="120px">
        <el-form-item label="你的助记词" prop="mnemonic" :rules="[{ required: true, message: '请输入助记词' }]">
          <el-input v-model="formData.mnemonic" :autosize="{ minRows: 8, maxRows: 15 }" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="起始序号:" prop="start" :rules="[{ required: true, message: '数量不能为空' }]">
          <el-input v-model="formData.start" type="number"></el-input>
        </el-form-item>
        <el-form-item label="生成数量:" prop="num" :rules="[{ required: true, message: '数量不能为空' }]">
          <el-input v-model="formData.num" type="number"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createAddress" :loading="loading">一键生成</el-button>
          <el-button type="danger" @click="resetForm('ruleForm')" :disabled="loading">重置表单</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="index" label="序号" width="80"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script>
let ethers = require('ethers')
let bip39 = require('bip39')
let { hdkey } = require('ethereumjs-wallet')
let util = require('ethereumjs-util')
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
        start: 0,
      },
      json_fields: {
        序号: 'index',
        地址: 'address',
      },
    }
  },
  methods: {
    createAddress() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.newAddress()
          }, 500)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    newAddress() {
      let dataArr = []
      let seed = bip39.mnemonicToSeedSync(this.formData.mnemonic)
      let hdWallet = hdkey.fromMasterSeed(seed)

      console.log('助记词:' + this.formData.mnemonic)
      let end = parseInt(this.formData.start) + parseInt(this.formData.num)
      for (let i = this.formData.start; i < end; i++) {
        let key = hdWallet.derivePath(`m/44'/60'/0'/0/${i}`)
        let address = util.toChecksumAddress('0x' + util.pubToAddress(key._hdkey._publicKey, true).toString('hex'))
        console.log('地址:' + address)
        dataArr[i] = {
          index: i + 1,
          address,
        }
      }
      this.loading = false
      this.tableData = dataArr
    },
    resetForm() {
      this.formData.start = null
      this.$refs.ruleForm.resetFields()
    },
  },
}
</script>
