<template>
  <div class="p-6 sidebar">
    <Menu :model="items" class="w-full " style="border: none">
      <template #start>
        <div class="card flex justify-center mb-8">
          <img src="/public/sidebar/Group33.png" alt="" />
        </div>
      </template>
      <template #item="slotProps">
      <nuxt-link :to="slotProps.item.to" >
        <div class="flex align-center menu-item pr-2 ">
   
            <div :id="'a' + `${slotProps.item.id}`" class="ml-2"></div>
          {{ slotProps.item.label }}
          
        </div>
      </nuxt-link>
    </template>
      
    </Menu>


    <!-- <div class="card flex justify-start">
      <ul class="mt-6 menu">
        <nuxt-link to="/">
          <li class="flex align-center menu-item pr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
            >
              <path
                d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            داشبورد
          </li>
        </nuxt-link>
        <nuxt-link to="/operation">
          <li class="flex align-center menu-item pr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
            >
              <path
                d="M14 2.92V11.23C14 12.25 13.17 13.08 12.15 13.08H3C2.45 13.08 2 12.63 2 12.08V5.69C2 3.65 3.65 2 5.69 2H13.07C13.59 2 14 2.41 14 2.92Z"
                fill="#246020"
              />
              <path
                d="M21.5 15.5C21.78 15.5 22 15.72 22 16V17C22 18.66 20.66 20 19 20C19 18.35 17.65 17 16 17C14.35 17 13 18.35 13 20H11C11 18.35 9.65 17 8 17C6.35 17 5 18.35 5 20C3.34 20 2 18.66 2 17V15C2 14.45 2.45 14 3 14H12.5C13.88 14 15 12.88 15 11.5V6C15 5.45 15.45 5 16 5H16.84C17.56 5 18.22 5.39 18.58 6.01L19.22 7.13C19.31 7.29 19.19 7.5 19 7.5C17.62 7.5 16.5 8.62 16.5 10V13C16.5 14.38 17.62 15.5 19 15.5H21.5Z"
                fill="#246020"
              />
              <path
                d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                fill="#246020"
              />
              <path
                d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                fill="#246020"
              />
              <path
                d="M22 12.53V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L21.74 11.54C21.91 11.84 22 12.18 22 12.53Z"
                fill="#246020"
              />
            </svg>

            عملیات
          </li>
        </nuxt-link>
        <NuxtLink to="/administrative">
          <li class="flex align-center menu-item pr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
            >
              <path
                d="M8 12.2H15"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 16.2H12.38"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            اداری
          </li>
        </NuxtLink>
        <nuxt-link to="/finance">
          <li class="flex align-center menu-item pr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
            >
              <path
                d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 6V18"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            مالی
          </li>
        </nuxt-link>
        <li class="flex align-center menu-item pr-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2"
          >
            <path
              d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M8 2H17C19 2 20 3 20 5V6.38"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          کارتابل
        </li>
        <li class="flex align-center menu-item pr-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2"
          >
            <path
              d="M2 22H22"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10Z"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          چارت سازمانی
        </li>
        <nuxt-link to="/general">
          <li class="flex align-center menu-item pr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
            >
              <path
                d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 8H19"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 12H19"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 16H19"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 11.2899C9.49964 11.2899 10.31 10.4796 10.31 9.47992C10.31 8.48029 9.49964 7.66992 8.5 7.66992C7.50037 7.66992 6.69 8.48029 6.69 9.47992C6.69 10.4796 7.50037 11.2899 8.5 11.2899Z"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33"
                stroke="#6B7280"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            عمومی
          </li>
        </nuxt-link>
        <hr />
        <li class="flex align-center menu-item pr-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2"
          >
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          تنظیمات
        </li>
        <li class="flex align-center menu-item pr-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2"
          >
            <path
              d="M9 20.7499H6C5.65324 20.7647 5.30697 20.7109 4.98101 20.5917C4.65505 20.4725 4.3558 20.2902 4.10038 20.0552C3.84495 19.8202 3.63837 19.5371 3.49246 19.2222C3.34654 18.9073 3.26415 18.5667 3.25 18.2199V5.77994C3.26415 5.43316 3.34654 5.09256 3.49246 4.77765C3.63837 4.46274 3.84495 4.17969 4.10038 3.9447C4.3558 3.70971 4.65505 3.52739 4.98101 3.40818C5.30697 3.28896 5.65324 3.23519 6 3.24994H9C9.19891 3.24994 9.38968 3.32896 9.53033 3.46961C9.67098 3.61027 9.75 3.80103 9.75 3.99994C9.75 4.19886 9.67098 4.38962 9.53033 4.53027C9.38968 4.67093 9.19891 4.74994 9 4.74994H6C5.70307 4.72412 5.4076 4.81359 5.17487 4.99977C4.94213 5.18596 4.78999 5.45459 4.75 5.74994V18.2199C4.78999 18.5153 4.94213 18.7839 5.17487 18.9701C5.4076 19.1563 5.70307 19.2458 6 19.2199H9C9.19891 19.2199 9.38968 19.299 9.53033 19.4396C9.67098 19.5803 9.75 19.771 9.75 19.9699C9.75 20.1689 9.67098 20.3596 9.53033 20.5003C9.38968 20.6409 9.19891 20.7199 9 20.7199V20.7499Z"
              fill="#6B7280"
            />
            <path
              d="M16 16.7499C15.9014 16.7504 15.8038 16.7312 15.7128 16.6934C15.6218 16.6556 15.5392 16.6 15.47 16.5299C15.3295 16.3893 15.2506 16.1987 15.2506 15.9999C15.2506 15.8012 15.3295 15.6105 15.47 15.4699L18.94 11.9999L15.47 8.52991C15.3963 8.46125 15.3372 8.37845 15.2962 8.28645C15.2552 8.19445 15.2332 8.09513 15.2314 7.99443C15.2296 7.89373 15.2481 7.7937 15.2858 7.70031C15.3236 7.60692 15.3797 7.52209 15.4509 7.45087C15.5222 7.37965 15.607 7.32351 15.7004 7.28579C15.7938 7.24807 15.8938 7.22954 15.9945 7.23132C16.0952 7.23309 16.1945 7.25514 16.2865 7.29613C16.3785 7.33712 16.4613 7.39622 16.53 7.46991L20.53 11.4699C20.6704 11.6105 20.7493 11.8012 20.7493 11.9999C20.7493 12.1987 20.6704 12.3893 20.53 12.5299L16.53 16.5299C16.4607 16.6 16.3782 16.6556 16.2872 16.6934C16.1962 16.7312 16.0985 16.7504 16 16.7499Z"
              fill="#6B7280"
            />
            <path
              d="M20 12.75H9C8.80109 12.75 8.61032 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12C8.25 11.8011 8.32902 11.6103 8.46967 11.4697C8.61032 11.329 8.80109 11.25 9 11.25H20C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12C20.75 12.1989 20.671 12.3897 20.5303 12.5303C20.3897 12.671 20.1989 12.75 20 12.75Z"
              fill="#6B7280"
            />
          </svg>

          خروج
        </li>
      </ul>
    </div> -->
  </div>
</template>
<style lang="scss">
.sidebar {
  .p-focus {
    .menu-item {
      background-color: #CEDCCD;
      color: #0c4e07;
      border-radius: 8px;
    }

  }


  width: 100%;
  #a1 {
    background-image: url("/public/sidebar/1.svg");
    width: 24px;
    height: 24px;
  }
  #a2 {
    background-image: url("/public/sidebar/2.svg");
    width: 24px;
    height: 24px;
  }
  #a3 {
    background-image: url("/public/sidebar/3.svg");
    width: 24px;
    height: 24px;
  }
  #a4 {
    background-image: url("/public/sidebar/4.svg");
    width: 24px;
    height: 24px;
  }
  #a5 {
    background-image: url("/public/sidebar/5.svg");
    width: 24px;
    height: 24px;
  }
  #a6 {
    background-image: url("/public/sidebar/6.svg");
    width: 24px;
    height: 24px;
   
  }
  #a7 {
    background-image: url("/public/sidebar/7.svg");
    width: 24px;
    height: 24px;
  }
  #a8 {
    background-image: url("/public/sidebar/8.svg");
    width: 24px;
    height: 24px;
  }
  #a9 {
    background-image: url("/public/sidebar/9.svg");
    width: 24px;
    height: 24px;
  }
  .icon {
    width: 50px;
    height: 50px;
    background-image: url("../../public/sidebar/1.svg");
    background-size: contain;
    background-repeat: no-repeat;
    color: red;
    fill: #dbea0b;
  }
  .menu {
    width: 100%;
  }
  .active {
    background-color: #cedccd;
    border-radius: 8px;
  }
  .menu-item:hover {
    path {
      stroke: #0c4e07;
    }
  }
  .menu-item {
    align-items: center;
    color: #6b7280;
    height: 48px;
  }
  .menu-item:hover {
    background-color: #f3f6f3;
    border-radius: 8px;
    color: #0c4e07;
  }
}
</style>

<script>
export default {
  data() {
    return {
      // a :"a" ,
      items: [
        {
          label: "داشبورد",
          to: "/",
          id: 1
        },
        {
          label: "عملیات",
          to: "/operation",
          id: 2
          
        },
        {
          label: "اداری",
          to: "/administrative",
          id: 3
        },
        {
          label: "مالی",
          to: "/finance",
          id: 4
        },
        {
          label: "کارتابل",
          to: "/cartable",
          id: 5
        },
        {
          label: "چارت سازمانی",
          to: "/",
          id: 6
        },
        {
          label: "عمومی",
          to: "/general",
          id: 7
        },
        {
          label: "تنظیمات",
          to: "/",
          id: 8
        },
        {
          label: "خروج",
          to: "/",
          id: 9
        },
        // You can add more items as needed
      ],
    };
  },
};
</script>
