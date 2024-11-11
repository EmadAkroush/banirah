<template>
  <div class="p-6 sidebar">
    <div class="card flex justify-center">
    <img src="/public/sidebar/Group33.png" alt="">
    </div>
    <div class="card flex justify-start">
      <ul class="mt-6 menu">
        <li class="flex align-center menu-item ">
          <img
            src="../../public/sidebar/1.svg"
            alt="Image"
            width="24"
            class="ml-2"
          />
          داشبورد
        </li>
        <li class="flex align-center menu-item active">
          <img
             src="../../public/sidebar/2.svg"
            alt="Image"
            width="24"
            class="ml-2"
          />
          عملیات 
        </li>
        <li class="flex align-center menu-item">
          <img
            src="../../public/sidebar/3.svg"
            alt="Image"
            width="24"
            class="ml-2"
          />
          اداری 
        </li>
        <li class="flex align-center menu-item">
          <img
            src="../../public/sidebar/4.svg"
            alt="Image"
            width="24"
            class="ml-2"
          />
          مالی  
        </li>
        <li class="flex align-center menu-item">
          <img
             src="../../public/sidebar/5.svg"
            alt="Image"
            width="24"
            class="ml-2"
          />
          کارتابل  
        </li>
        <li class="flex align-center menu-item">
          <img
            src="../../public/sidebar/6.svg"
            alt="Image"
            width="24"
            class="ml-2"
          />
          چارت سازمانی   
        </li>
        <li class="flex align-center menu-item">
          <img
            src="../../public/sidebar/7.svg"
            alt="Image"
            width="24"
            class="ml-2"
          />
          عمومی 
        </li>
        <li class="flex align-center menu-item">
          <img
            src="../../public/sidebar/8.svg"
            alt="Image"
            width="24"
            class="ml-2"
          />
          تنظیمات  
        </li>
        <li class="flex align-center menu-item">
          <img
            src="../../public/sidebar/9.svg"
            alt="Image"
            width="24"
            class="ml-2"
          />
          خروج   
        </li>
        
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.sidebar {
  width: 100%;
  .menu {
    width: 100%;
  }
  .active {
    background-color: #CEDCCD;
    border-radius: 8px;
   
  }
  .menu-item {
    align-items: center;
    color: #6B7280;
    height: 48px;
  }
}
</style>
