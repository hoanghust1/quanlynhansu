<template>
  <div>
    <form v-on:submit.prevent="suanv (searchnv.tennv, searchnv.ngaysinh, searchnv.gioitinh, searchnv.diachi, searchnv.sdt)">
      <table width="95%">
        <tr>
          <td style="float: right">
            <b>Họ và Tên:</b>
          </td>
          <td>
            <input type="text" v-model="searchnv.tennv" placeholder="Tên Nhân Viên">
          </td>
        </tr>
        <tr>
          <td style="float: right">
            <b>Ngày Sinh:</b>
          </td>
          <td>
            <input type="date" v-model="searchnv.ngaysinh" placeholder="Ngày Sinh">
          </td>
        </tr>
        <tr>
          <td style="float: right">
            <b>Giới Tính:</b>
          </td>
          <td>
            <input type="radio" v-model="searchnv.gioitinh" id="male" value="Nam">
            <label for="male">Nam</label>
            <input type="radio" v-model="searchnv.gioitinh" id="female" value="Nữ">
            <label for="female">Nữ</label>
            <br>
          </td>
        </tr>
        <tr>
          <td style="float: right">
            <b>Địa Chỉ:</b>
          </td>
          <td>
            <input type="text" v-model="searchnv.diachi" placeholder="Địa Chỉ">
          </td>
        </tr>
        <tr>
          <td style="float: right">
            <b>Sdt:</b>
          </td>
          <td>
            <input type="number" v-model="searchnv.sdt" placeholder="Số Điện Thoại">
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button>Lưu dữ liệu</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'suanvv',
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
  mounted () {
    this.$store.dispatch('timnhanvien', this.manhanvien)
  },
  methods: {
    suanv (tennv, ngaysinh, gioitinh, diachi, sdt) {
      var manv = this.manhanvien
      var lenh = 'update'
      this.$store
        .dispatch('suannv', { manv, tennv, ngaysinh, gioitinh, diachi, sdt, lenh })
        .then(() => this.$router.push({ name: 'danhsachnv' }))
    }
  },
  computed: {
    manhanvien () {
      return this.$route.params.manv
    },
    ...mapGetters(['searchnv'])
  }
}
</script>
