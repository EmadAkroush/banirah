<template>
  <div class="administrative p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">اداری</p>
        </div>
      </div>
      <div
        class="flex items-center justify-end align-center ml-4"
        style="width: 178px"
      >
        <div>
          <p class="ml-2">۱۷ اردیبهشت ۱۴۰۳</p>
        </div>
        <img src="/public/opration/Calender.svg" alt="" class="pic" />
      </div>
    </div>
    <div class="flex flex-row gap-x-3 mt-3">
      <div class="basis-1/6">
        <Card class="cardout c1">
          <template #content>
            <nuxt-link to="/administrative/purchase">
              <div class="flex items-center justify-center cardmy">
                <div
                  class="in1 in flex items-center justify-center"
                  style="width: 76px; height: 76px"
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.33557 14.27C4.33557 12.7316 5.58276 11.4844 7.12124 11.4844H31.0822C32.6206 11.4844 33.8678 12.7316 33.8678 14.27V23.8488C33.8678 30.6775 28.3321 36.2132 21.5034 36.2132H16.7C9.8713 36.2132 4.33557 30.6775 4.33557 23.8488V14.27ZM7.12124 13.8721C6.90145 13.8721 6.72329 14.0503 6.72329 14.27V23.8488C6.72329 29.3588 11.19 33.8255 16.7 33.8255H21.5034C27.0134 33.8255 31.4801 29.3588 31.4801 23.8488V14.27C31.4801 14.0503 31.3019 13.8721 31.0822 13.8721H7.12124Z"
                      fill="#93CC1A"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.0921 5.43799C14.0937 6.0954 13.5087 7.00536 13.5087 8.21103V19.3819C13.5087 20.0413 12.9742 20.5758 12.3148 20.5758C11.6555 20.5758 11.121 20.0413 11.121 19.3819V8.21103C11.121 6.06549 12.2325 4.46201 13.7789 3.44377C15.2903 2.44861 17.23 1.99027 19.1009 1.99023C20.9719 1.9902 22.9116 2.44849 24.423 3.44361C25.9694 4.46183 27.081 6.0653 27.081 8.21087V19.3819C27.081 20.0413 26.5464 20.5758 25.8871 20.5758C25.2277 20.5758 24.6932 20.0413 24.6932 19.3819V8.21087C24.6932 7.00517 24.1083 6.09522 23.1099 5.43785C22.0764 4.7574 20.6231 4.37792 19.101 4.37795C17.5788 4.37797 16.1255 4.75749 15.0921 5.43799Z"
                      fill="#93CC1A"
                    />
                  </svg>
                </div>
                <p class="m-0 pt-3 text-buttom">درخواست خرید</p>
              </div>
            </nuxt-link>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout c2">
          <template #content>
            <div class="flex items-center justify-center cardmy">
              <div
                class="in2 in flex items-center justify-center"
                style="width: 76px; height: 76px"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.3603 16.5456L33.2503 10.6556L27.3603 4.76562"
                    stroke="#007AFF"
                    stroke-width="2.38771"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.75009 10.6562H33.2501"
                    stroke="#007AFF"
                    stroke-width="2.38771"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.64 21.4531L4.75009 27.3432L10.64 33.2331"
                    stroke="#007AFF"
                    stroke-width="2.38771"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M33.2501 27.3438H4.75009"
                    stroke="#007AFF"
                    stroke-width="2.38771"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="m-0 pt-3 text-buttom">ثبت ورود خروج</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout c3">
          <template #content>
            <nuxt-link to="/administrative/person">
              <div class="flex items-center justify-center cardmy">
                <div
                  class="in3 in flex items-center justify-center"
                  style="width: 76px; height: 76px"
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5 29.8617H27.2966C26.03 29.8617 24.8266 30.3526 23.94 31.2392L21.2324 33.9151C19.9974 35.1342 17.9867 35.1342 16.7517 33.9151L14.0441 31.2392C13.1575 30.3526 11.9383 29.8617 10.6875 29.8617H9.49997C6.87164 29.8617 4.74997 27.7559 4.74997 25.1592V7.86925C4.74997 5.27258 6.87164 3.16675 9.49997 3.16675H28.5C31.1283 3.16675 33.25 5.27258 33.25 7.86925V25.1434C33.25 27.7401 31.1283 29.8617 28.5 29.8617Z"
                      stroke="#93CC1A"
                      stroke-width="2.38771"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.111 14.1708C19.0476 14.1708 18.9526 14.1708 18.8734 14.1708C17.2109 14.1075 15.8967 12.7617 15.8967 11.0833C15.8967 9.37335 17.2743 7.99585 18.9843 7.99585C20.6943 7.99585 22.0718 9.38918 22.0718 11.0833C22.0876 12.7617 20.7735 14.1233 19.111 14.1708Z"
                      stroke="#93CC1A"
                      stroke-width="2.38771"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.646 18.9368C12.5401 20.3459 12.5401 22.6418 14.646 24.0509C17.0368 25.6501 20.9635 25.6501 23.3543 24.0509C25.4601 22.6418 25.4601 20.3459 23.3543 18.9368C20.9635 17.3534 17.0526 17.3534 14.646 18.9368Z"
                      stroke="#93CC1A"
                      stroke-width="2.38771"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p class="m-0 pt-3 text-buttom">تعریف شخص</p>
              </div>
            </nuxt-link>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout c4" @click="showModal = true">
          <template #content>
            <div class="flex items-center justify-center cardmy">
              <div
                class="in4 in flex items-center justify-center"
                style="width: 76px; height: 76px"
              >
                <svg
                  width="39"
                  height="38"
                  viewBox="0 0 39 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1667 19.3164H24.25"
                    stroke="#9747FF"
                    stroke-width="2.38771"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.1667 25.6484H20.1017"
                    stroke="#9747FF"
                    stroke-width="2.38771"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.3333 9.49935H22.6667C25.8333 9.49935 25.8333 7.91602 25.8333 6.33268C25.8333 3.16602 24.25 3.16602 22.6667 3.16602H16.3333C14.75 3.16602 13.1667 3.16602 13.1667 6.33268C13.1667 9.49935 14.75 9.49935 16.3333 9.49935Z"
                    stroke="#9747FF"
                    stroke-width="2.38771"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.8333 6.36523C31.1058 6.65023 33.75 8.59773 33.75 15.8336V25.3336C33.75 31.6669 32.1666 34.8336 24.25 34.8336H14.75C6.8333 34.8336 5.24997 31.6669 5.24997 25.3336V15.8336C5.24997 8.61357 7.89414 6.65023 13.1666 6.36523"
                    stroke="#9747FF"
                    stroke-width="2.38771"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="m-0 pt-3 text-buttom">قرارداد</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout cr">
          <template #content>
            <div class="flex items-center justify-center cardmy">
              <div
                class="inr in flex items-center justify-center"
                style="width: 76px; height: 76px"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.656 31.192C11.9543 29.7987 13.9335 29.9095 15.0735 31.4295L16.6726 33.567C17.9551 35.2612 20.0293 35.2612 21.3118 33.567L22.911 31.4295C24.051 29.9095 26.0301 29.7987 27.3285 31.192C30.1468 34.2003 32.4426 33.2028 32.4426 28.9912V11.147C32.4585 4.76616 30.9701 3.16699 24.9851 3.16699H13.0151C7.03014 3.16699 5.54181 4.76616 5.54181 11.147V28.9753C5.54181 33.2028 7.85348 34.1845 10.656 31.192Z"
                    stroke="#3CAFB6"
                    stroke-width="2.38771"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8187 17.4167H12.8329"
                    stroke="#3CAFB6"
                    stroke-width="2.38771"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.2557 17.417H25.9641"
                    stroke="#3CAFB6"
                    stroke-width="2.38771"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8187 11.0837H12.8329"
                    stroke="#3CAFB6"
                    stroke-width="2.38771"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.2557 11.083H25.9641"
                    stroke="#3CAFB6"
                    stroke-width="2.38771"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="m-0 pt-3 text-buttom">گزارش</p>
            </div>
          </template>
        </Card>
      </div>
      <Dialog
        v-model:visible="showModal"
        :modal="true"
        :dismissable-mask="false"
        class="rounded-lg"
        :style="{ width: '90%', maxWidth: '900px' }"
      >
        <!-- Close Button -->
        <button
          class="absolute -top-4 right-1/2 transform translate-x-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
          @click="showModal = false"
        >
          ✕
        </button>

        <!-- Card Grid -->
        <div class="grid grid-cols-3 gap-6 mt-4">
          <!-- Internal Letter Card -->
          <nuxt-link to="/administrative/contract/gas">
            <div
              class="flex flex-col items-center rounded-xl p-6 transition hover:scale-105 cursor-pointer shadow-md"
            >
              <!-- Icon -->
              <div
                class="w-20 h-20 flex items-center justify-center bg-green-200 rounded-full shadow text-green-600"
                style="background-color: #fff4e0"
              >
                <img src="/public/Contract/icons-Line-gas.png" alt="" />
              </div>
              <!-- Label -->
              <p class="mt-3 text-gray-600 font-medium">حمل گاز</p>
            </div>
          </nuxt-link>

          <!-- External Letter Card -->
          <nuxt-link to="/administrative/contract/driver">
            <div
              class="flex flex-col items-center rounded-xl p-6 transition hover:scale-105 cursor-pointer shadow-md"
            >
              <!-- Icon -->
              <div
                class="w-20 h-20 flex items-center justify-center bg-purple-200 rounded-full shadow text-purple-600"
                style="background-color: #eeebfc"
              >
                <img src="/public/Contract/icons-Line-driver.png" alt="" />
                <i class="pi pi-upload text-2xl"></i>
              </div>
              <!-- Label -->
              <p class="mt-3 text-gray-600 font-medium">شرکت با راننده</p>
            </div>
          </nuxt-link>
          <!-- External Letter Card -->
          <nuxt-link to="/administrative/contract/forwarder">
            <div
              class="flex flex-col items-center rounded-xl p-6 transition hover:scale-105 cursor-pointer shadow-md"
            >
              <!-- Icon -->
              <div
                class="w-20 h-20 flex items-center justify-center bg-purple-200 rounded-full shadow text-purple-600"
                style="background-color: #ebfcff"
              >
                <img
                  src="/public/Contract/icons-Line-business-card.png"
                  alt=""
                />
                <i class="pi pi-upload text-2xl"></i>
              </div>
              <!-- Label -->
              <p class="mt-3 text-gray-600 font-medium">فورواردری</p>
            </div>
          </nuxt-link>
        </div>
        <!-- Card Grid -->
        <div class="grid grid-cols-3 gap-6 mt-4">
          <!-- Internal Letter Card -->
          <nuxt-link to="/administrative/contract/carier">
            <div
              class="flex flex-col items-center rounded-xl p-6 transition hover:scale-105 cursor-pointer shadow-md"
            >
              <!-- Icon -->
              <div
                class="w-20 h-20 flex items-center justify-center bg-green-200 rounded-full shadow text-green-600"
                style="background-color: #ffe8e8"
              >
                <img src="/public/Contract/Frame 16.png" alt="" />
              </div>
              <!-- Label -->
              <p class="mt-3 text-gray-600 font-medium">کریری</p>
            </div>
          </nuxt-link>

          <!-- External Letter Card -->
          <div
            class="flex flex-col items-center rounded-xl p-6 transition hover:scale-105 cursor-pointer shadow-md"
          >
            <!-- Icon -->
            <div
              class="w-20 h-20 flex items-center justify-center bg-purple-200 rounded-full shadow text-purple-600"
              style="background-color: #e8fcf4"
            >
              <img src="/public/Contract/icons-Line-money-change.png" alt="" />
              <i class="pi pi-upload text-2xl"></i>
            </div>
            <!-- Label -->
            <p class="mt-3 text-gray-600 font-medium">بدون نام </p>
          </div>
          <!-- External Letter Card -->
          <div
            class="flex flex-col items-center rounded-xl p-6 transition hover:scale-105 cursor-pointer shadow-md"
          >
            <!-- Icon -->
            <div
              class="w-20 h-20 flex items-center justify-center bg-purple-200 rounded-full shadow text-purple-600"
              style="background-color: #e8fcf4"
            >
              <img src="/public/Contract/icons-Line-money-change.png" alt="" />
              <i class="pi pi-upload text-2xl"></i>
            </div>
            <!-- Label -->
            <p class="mt-3 text-gray-600 font-medium">بدون نام </p>
          </div>
        </div>
      </Dialog>
    </div>

    <div>
      <div class="flex flex-row gap-3 mt-6">
        <Card class="w-1/2">
          <template #title>
            <div class="flex flex-row justify-between mb-12">
              <div>
                <span class="one"> مرخصی </span>
              </div>
              <div class="left flex items-center justify-center">
                <span class="ml-1">در انتظار تایید اداری</span>
                <span>
                  <img
                    src="/public/opration/icons-Line-Line-arrow-up.svg"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </template>
          <template #content>
            <Stepper value="1">
              <StepList>
                <Step value="1"> درخواست کننده </Step>
                <Step value="2"> تایید اداری </Step>
                <Step value="3"> تایید مدیریت </Step>
              </StepList>
            </Stepper>
          </template>
        </Card>
        <Card class="w-1/2">
          <template #title>
            <div class="flex flex-row justify-between mb-12">
              <div>
                <span class="one"> ماموریت </span>
              </div>
              <div class="right flex items-center justify-center">
                <span class="ml-2"> تایید شد </span>
                <span>
                  <img
                    src="/public/opration/icons-Line-tick-circle.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </template>
          <template #content>
            <Stepper value="1">
              <StepList>
                <Step value="1" class="flex flex-row flex-wrap">
                  <p>
                    درخواست کننده <br />
                    <span class="down-date"> ۲۵ اردیبهشت ۱۴۰۳ </span>
                  </p>
                </Step>
                <Step value="2">
                  <p>
                    تایید اداری <br />
                    <span class="down-date"> ۲۵ اردیبهشت ۱۴۰۳ </span>
                  </p>
                </Step>
                <Step value="3">
                  <p>
                    تایید مدیریت <br />
                    <span class="down-date"> ۲۵ اردیبهشت ۱۴۰۳ </span>
                  </p>
                </Step>
              </StepList>
            </Stepper>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.administrative {
  background-color: #f3f4f6;
  min-height: 100vh;

  .p-datatable-header-cell {
    background-color: #f5f5f5;
    color: #888888;
    text-align: center;
  }

  .sec1 {
    display: flex;
    justify-content: space-between;
    .pic {
      width: 24px;
      height: 24px;
    }

    .text {
      font-size: 14px;
      color: #686f77;
    }
    .text-right {
      color: #1f2937;
      font-size: 20px;
      font-weight: 700px;
    }
  }
  .cardmy {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .cardout {
    box-shadow: 0px 0px 12px 0px #0000000f;
    // padding: 60px 0;
    .text-buttom {
      font-weight: 400;
      font-size: 16px;
      color: #1f2937;
    }
  }
  .in1 {
    background-color: #f6fde7;
    border-radius: 50%;
  }
  .in2 {
    background-color: #eff6ff;
    border-radius: 50%;
  }
  .in3 {
    background-color: #f6fde7;
    border-radius: 50%;
  }
  .in4 {
    background-color: #f6f0fe;
    border-radius: 50%;
  }
  
  .in5 {
    background-color: #eef2ff;
    border-radius: 50%;
  }
  .in6 {
    background-color: #f6fde7;
    border-radius: 50%;
  }
  .inr {
    background-color: #E5F8F9;
    border-radius: 50%;
  }
  .cr:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    .inr {
      background-color: #3CAFB6;
      path {
        stroke: white;
      }
    }
  }
  .c1 {
    transition-delay: 20s;
    transition-duration: 5s;
  }
  .c1:hover {
    transition-delay: 20s;
    transition-duration: 5s;
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    .in1 {
      background-color: #93cc1a;
      path {
        stroke: white;
        color: white;
        fill: white;
      }
    }
  }
  .c2:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    background: linear-gradient(48.55deg, #fdfdfd -1.31%, #f2f8ff 106.19%);
    background: linear-gradient(48.55deg, #fdfdfd -1.31%, #f2f8ff 106.19%);
    background: linear-gradient(48.55deg, #fdfdfd -1.31%, #f2f8ff 106.19%);
    .in2 {
      background-color: #007aff;
      path {
        stroke: white;
      }
    }
  }
  .c3:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    background: linear-gradient(48.55deg, #fdfdfd -1.31%, #f2f8ff 106.19%);
    background: linear-gradient(48.55deg, #fdfdfd -1.31%, #f2f8ff 106.19%);
    background: linear-gradient(48.55deg, #fdfdfd -1.31%, #f2f8ff 106.19%);
    .in3 {
      background-color: #93cc1a;
      path {
        stroke: white;
      }
    }
  }
  .c4:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    .in4 {
      background-color: #9747ff;
      path {
        stroke: white;
      }
    }
  }
  .c5:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    .in5 {
      background-color: #6366f1;
      path {
        stroke: white;
      }
    }
  }
  .c6:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    .in6 {
      background-color: #93cc1a;
      path {
        stroke: white;
      }
    }
  }
  .c7:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
  }
  .c8:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
  }
  .card-bar {
    width: 99%;
    .down-date {
      font-size: 12px;
      font-weight: 400;
    }
    .left {
      background: #f9fafb;
      color: #6b7280;
      width: 161px;
      height: 36px;
      font-size: 14px;
      font-weight: 400px;
      border-radius: 100px;
    }
    .right {
      background: #f9fafb;
      color: #22c55e;
      width: 102px;
      height: 36px;
      font-size: 14px;
      font-weight: 400px;
      border-radius: 100px;
    }
    .one {
      color: #1f2937;
      font-size: 18px;
      font-weight: 400;
    }
    .tow {
      color: #1f2937;
      font-size: 18px;
      font-weight: 400;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      showModal: false,
      dropdownOptions: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        // Add more options as needed
      ],
    };
  },
};
</script>
<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
