<template>
  <div>
    <form v-on:submit.prevent="xoanv()">
      <table width="70%">
        <tr style="border-bottom: 1px solid #ccc">
          <td style="float: right">
            <b>Mã Nhân Viên:</b>
          </td>
          <td>
              {{searchnv.manv}}
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #ccc">
          <td style="float: right">
            <b>Họ Và Tên:</b>
          </td>
          <td>
              {{searchnv.tennv}}
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #ccc">
          <td style="float: right">
            <b>Ngày Sinh:</b>
          </td>
          <td>
              {{searchnv.ngaysinh}}
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #ccc">
          <td style="float: right">
            <b>Giới Tính:</b>
          </td>
          <td>
              {{searchnv.gioitinh}}
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #ccc">
          <td style="float: right">
            <b>Địa Chỉ:</b>
          </td>
          <td>
              {{searchnv.diachi}}
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #ccc">
          <td style="float: right">
            <b>Số Điện Thoại:</b>
          </td>
          <td>
              {{searchnv.sdt}}
          </td>
        </tr>
        <tr style='border-bottom: 1px solid #ccc'>
          <td></td>
          <td><button>Xác Nhận</button></td></tr>
      </table>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'xoanvv',
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
    xoanv () {
      var manv = this.manhanvien
      var lenh = 'xoanhavin'
      this.$store
        .dispatch('xoanvv', { manv, lenh })
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
