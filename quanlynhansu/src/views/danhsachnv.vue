<template>
  <div>
    <router-link :to="{ name: 'themnhanvien' }">
      <input type="submit" class="nut" value="Thêm Nhân Viên">
    </router-link>
    <div>
     <table border='1' width='100%' cellpadding='10' cellspacing='0'>
       <caption><h1>Thông Tin Nhân Viên</h1></caption>
       <th>Mã Nhân Viên</th>
       <th>Họ và Tên</th>
       <th>Ngày Sinh</th>
       <th>Giới Tính</th>
       <th>Địa Chỉ</th>
       <th>Số Điện Thoại</th>
       <th>Tùy Chọn</th>
       <tbody v-for='nv in listnv' :key="nv.manv">
         <td>{{ nv.manv }}</td>
         <td>{{ nv.tennv }}</td>
         <td>{{ nv.ngaysinh }}</td>
         <td>{{ nv.gioitinh }}</td>
         <td>{{ nv.diachi }}</td>
         <td>{{ nv.sdt }}</td>
         <td><router-link :to="`/suanhanvien/${nv.manv}`">Sửa</router-link>&nbsp;&nbsp; | &nbsp;&nbsp;
         <router-link :to="`/xoanhanvien/${nv.manv}`">Xóa</router-link>
         </td>
       </tbody>
       </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  mounted () {
    this.$store.dispatch('listnhanvien')
  },
  computed: {
    ...mapGetters(['listnv']),
    manv () {
      return this.$route.params.manv
    }
  }
}
</script>

<style>
.nut {
  cursor: pointer;
  padding: 8px 10px 8px 10px;
  margin: 50px 0px 15px 0px;
  color: #fff;
  background-color: blue;
}
</style>
