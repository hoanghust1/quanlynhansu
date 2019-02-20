<template>
  <div>
    <ul v-if="errors" class="error-messages">
      <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
    </ul>
    <form v-on:submit.prevent="themnv (manv, tennv, ngaysinh, gioitinh, diachi, sdt)">
      <table width="95%">
        <tr>
          <td style="float: right">
            <b>Mã Nhân Viên:</b>
          </td>
          <td>
            <input type="number" v-model="manv" placeholder="Mã Nhân Viên">
          </td>
        </tr>
        <tr>
          <td style="float: right">
            <b>Họ và Tên:</b>
          </td>
          <td>
            <input type="text" v-model="tennv" placeholder="Tên Nhân Viên">
          </td>
        </tr>
        <tr>
          <td style="float: right">
            <b>Ngày Sinh:</b>
          </td>
          <td>
            <input type="date" v-model="ngaysinh" placeholder="Ngày Sinh">
          </td>
        </tr>
        <tr>
          <td style="float: right">
            <b>Giới Tính:</b>
          </td>
          <td>
            <input type="radio" v-model="gioitinh" id="male" value="Nam">
            <label for="male">Nam</label>
            <input type="radio" v-model="gioitinh" id="female" value="Nữ">
            <label for="female">Nữ</label>
            <br>
          </td>
        </tr>
        <tr>
          <td style="float: right">
            <b>Địa Chỉ:</b>
          </td>
          <td>
            <input type="text" v-model="diachi" placeholder="Địa Chỉ">
          </td>
        </tr>
        <tr>
          <td style="float: right">
            <b>Sdt:</b>
          </td>
          <td>
            <input type="number" v-model="sdt" placeholder="Số Điện Thoại">
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button>Thêm Nhân Viên</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RwvLogin',
  data () {
    return {
      manv: null,
      tennv: null,
      ngaysinh: null,
      gioitinh: null,
      diachi: null,
      sdt: null
    }
  },
  methods: {
    themnv (manv, tennv, ngaysinh, gioitinh, diachi, sdt) {
      // var error = false

      // error = this.isempty(manv, 'Nhập Mã Nhân Viên')
      // if (error) {
      //   alert('Nhập mã nhân viên')
      //   return false
      // } else {
      this.$store
        .dispatch('themnhanvien', { manv, tennv, ngaysinh, gioitinh, diachi, sdt })
        .then(() => this.$router.push({ name: 'danhsachnv' }))
      // }
    }
    // isempty (key, value) {
    //   var temp = key.replace(' ', '')
    //   if (temp.length <= 0) {
    //     alert('Bạn chưa ' + value)
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
}
</script>

<style>
</style>
