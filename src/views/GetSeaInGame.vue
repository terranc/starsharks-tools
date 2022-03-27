<template>
  <h3>获取游戏内SEA余额</h3>
  <el-form :model="formData" ref="ruleForm" label-width="150px">
    <el-form-item label="SESSION TOKEN" prop="session" :rules="[{ required: true, message: '请输入...' }]">
      <el-input v-model="formData.session" :autosize="{ minRows: 8, maxRows: 15 }" type="textarea"></el-input>
    </el-form-item>
    <!-- <el-form-item label="白名单" prop="address" :rules="[{ required: false, message: '请输入...' }]">
      <el-input
        v-model="formData.address"
        :autosize="{ minRows: 8, maxRows: 15 }"
        type="textarea"
        placeholder="（每行一个地址）"
      ></el-input>
    </el-form-item> -->
    <el-form-item>
      <el-button type="primary" @click="submit">获取余额</el-button>
    </el-form-item>
    <div class="mb-3" v-if="tableData.length > 0">
      <h4>结果</h4>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="address" label="钱包"> </el-table-column>
        <el-table-column prop="balance" label="余额"> </el-table-column>
      </el-table>
    </div>
  </el-form>
</template>
<script>
import axios from 'axios'
export default {
  name: 'GetSeaInGame',
  components: {},
  data() {
    return {
      loading: false,
      formData: {
        session: '',
        address: '',
      },
      tableData: [],
      json_fields: {
        钱包: 'address',
        余额: 'balance',
      },
    }
  },
  methods: {
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.getBalance()
          }, 500)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getBalance() {
      let dataArr = []
      let sessionJson = JSON.parse(this.formData.session)
      this.loading = false
      this.tableData = dataArr
      Object.entries(sessionJson).forEach(([address, data], index) => {
        dataArr[index] = {
          address: address.substring(0, 6) + '...' + address.slice(-4),
          balance: 'loading...',
        }
        axios({
          method: 'get',
          url: 'https://starsharks.com/go/auth-api/account/base',
          responseType: 'json', // default
          headers: {
            'Content-Type': 'application/json',
            Authorization: data.authorization,
          },
        }).then(({ data }) => {
          if (data.code === 0) {
            this.tableData[index]['balance'] = data.data.amount
          }
        })
      })
    },
  },
}
</script>
