<template>
  <div class="container" style="margin: auto">
    <div class="bao-img">
      <svg class="VZmsM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><path d="M29.8954 13.2925L29.8954 13.2925L29.9017 13.2987C31.3613 14.7317 31.3642 17.2192 29.9218 18.6838L29.9079 18.6979L29.9056 18.7004L29.9028 18.7032C29.8975 18.7083 29.889 18.7165 29.8794 18.7261L28.7426 19.8622C28.1085 20.4958 27.7449 21.3575 27.7449 22.2672V23.9136C27.7449 26.0173 26.0313 27.7315 23.9254 27.7315H22.2762C21.3695 27.7315 20.5071 28.092 19.8721 28.7265L18.7193 29.8786L18.7187 29.8792C17.2246 31.3748 14.8134 31.3677 13.3091 29.8933L12.1437 28.727L12.1432 28.7265C11.5082 28.092 10.6459 27.7315 9.73911 27.7315H8.08991C5.98405 27.7315 4.2704 26.0173 4.2704 23.9136V22.2672C4.2704 21.3546 3.90521 20.5005 3.28506 19.8587L3.27653 19.8498L3.26779 19.8412L2.11962 18.7098C2.11892 18.7091 2.11822 18.7084 2.11753 18.7077C0.635192 17.2254 0.623838 14.8017 2.10553 13.3085C2.10589 13.3081 2.10625 13.3078 2.10661 13.3074L3.27276 12.1405C3.90906 11.5046 4.2704 10.642 4.2704 9.72103V8.08896C4.2704 5.9862 5.98318 4.27435 8.08991 4.27435H9.73911C10.6493 4.27435 11.5106 3.90819 12.1432 3.27607L13.296 2.12402L13.2987 2.1213C14.7794 0.630261 17.2041 0.625524 18.7051 2.11139C18.7055 2.1118 18.7059 2.11221 18.7063 2.11262L19.8721 3.27607C20.5047 3.90819 21.3661 4.27435 22.2762 4.27435H23.9254C26.0321 4.27435 27.7449 5.9862 27.7449 8.08896V9.73863C27.7449 10.6459 28.109 11.5073 28.7426 12.1405L29.8954 13.2925ZM29.9125 18.6938L29.9124 18.6938L29.9125 18.6938Z" fill="#007fff" stroke="white" stroke-width="2"></path><path d="M14 20.9829L9.71716 16.7001L11.4 15.0172L14 17.6172L20.6 11.0172L22.2828 12.7001L14 20.9829Z" fill="white"></path></svg>
      <img class="img-profile"
           src="https://images.unsplash.com/photo-1708923806194-0036d90971b5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    <div class="">
      <div class="bao-name">
        <h1 class="name">{{}}</h1>
        <button class="button" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" type="button"
               title="More Actions">
          <svg class="RCM9S" width="18" height="18" viewBox="0 0 24 24" version="1.1" aria-hidden="false">
            <desc lang="en-US">More Actions</desc>
            <path
                d="M6 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm14-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"></path>
          </svg>
        </button>
      </div>
      <div class="mo-ta">
        safhjsadbskabfksifbhÌBksihjsafbusabj
      </div>
      <div class="bao-dia-diem">
        <i class="fa-solid fa-location-dot"></i>
        <div>Seol-Korea</div>
      </div>
    </div>
  </div>
</template>



<!--<script setup>-->
<!--import { ref } from 'vue';-->
<!--import { useImageStore } from '/stores/image.js'; // Thay đường dẫn bằng đúng đường dẫn tới file useImageStore-->

<!--// Lấy store từ Pinia-->
<!--const imageStore = useImageStore();-->

<!--// Tạo một tham chiếu đến mảng imageList-->
<!--const imageList = ref([]);-->

<!--// Thực hiện action fetchImageList để cập nhật mảng imageList từ store-->
<!--imageStore.fetchImageList().then(() => {-->
<!--  // Lọc ra chỉ các URL và mô tả từ mảng imageList-->
<!--  imageList.value = imageStore.imageList.map(item => ({ avt: item.avt, description: item.description }));-->
<!--});-->
<!--</script>-->
<style scoped>
.img-profile {
  width: 100px;
  height: 100px;
  border-radius: 999px;
}
.bao-img{
  border: 1px solid #efe5e5;
  padding: 27px;
  border-radius: 999px;
  position: relative;
}
.container{
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap:50px;
  padding-top: 60px;
}
.VZmsM{
  position: absolute;
  top:6px;
  right: 5px;
}
.bao-dia-diem{
  display: flex;
  align-items: center;
  gap:10px;
  color: rgb(118, 118, 118);
  padding-top: 10px;
}
h2{
}

h1{
  font-weight: 700;
}

.bao-name{
  display: flex;
  gap:24px;
  align-items: center;
  padding-top: 10px;

}
.button{
  padding: 3px 11px;
  border-radius: 7px;
  border: 1px solid #e2d6d6;
  background: white;
}
.RCM9S{
  font-size: 10px;
  color: #767676;
}
</style>