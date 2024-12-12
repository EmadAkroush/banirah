<template>
  <div class="finance p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">مالی</p>
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
      <div class="basis-1/4">
        <Card class="cardout c1">
          <template #content>
            <nuxt-link to="finance/depositlist">
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
                      d="M3.1665 13.4583H21.3748"
                      stroke="#007AFF"
                      stroke-width="2.38771"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.49994 26.125H12.6666"
                      stroke="#007AFF"
                      stroke-width="2.38771"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.625 26.125H22.9583"
                      stroke="#007AFF"
                      stroke-width="2.38771"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.8332 19.0476V25.5076C34.8332 31.0651 33.424 32.4584 27.8032 32.4584H10.1965C4.57567 32.4584 3.1665 31.0651 3.1665 25.5076V12.4926C3.1665 6.93508 4.57567 5.54175 10.1965 5.54175H21.3748"
                      stroke="#007AFF"
                      stroke-width="2.38771"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26.1249 9.89575H34.8333"
                      stroke="#007AFF"
                      stroke-width="2.38771"
                      stroke-linecap="round"
                    />
                    <path
                      d="M30.4791 14.2501V5.54175"
                      stroke="#007AFF"
                      stroke-width="2.38771"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <p class="m-0 pt-9 text-buttom">تنظیم لیست واریزی</p>
              </div>
            </nuxt-link>
          </template>
        </Card>
      </div>

      <div class="basis-1/4">
        <Card class="cardout c3">
          <template #content>
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
                    d="M9.50005 15.8334V22.1667M28.5 15.8334V22.1667M3.16672 12.9834L3.16672 25.0167C3.16672 26.7902 3.16672 27.677 3.51186 28.3544C3.81546 28.9502 4.2999 29.4347 4.89575 29.7383C5.57313 30.0834 6.45988 30.0834 8.23338 30.0834L29.7667 30.0834C31.5402 30.0834 32.427 30.0834 33.1044 29.7383C33.7002 29.4347 34.1846 28.9502 34.4882 28.3544C34.8334 27.677 34.8334 26.7902 34.8334 25.0167V12.9834C34.8334 11.2099 34.8334 10.3232 34.4882 9.64578C34.1846 9.04993 33.7002 8.5655 33.1044 8.2619C32.427 7.91675 31.5402 7.91675 29.7667 7.91675L8.23339 7.91675C6.45989 7.91675 5.57314 7.91675 4.89575 8.26189C4.2999 8.56549 3.81546 9.04993 3.51186 9.64578C3.16672 10.3232 3.16672 11.2099 3.16672 12.9834ZM22.9584 19.0001C22.9584 21.1862 21.1862 22.9584 19.0001 22.9584C16.8139 22.9584 15.0417 21.1862 15.0417 19.0001C15.0417 16.814 16.8139 15.0417 19.0001 15.0417C21.1862 15.0417 22.9584 16.814 22.9584 19.0001Z"
                    stroke="#9747FF"
                    stroke-width="2.38771"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="m-0 pt-9 text-buttom">تنخواه گردان</p>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <div>
      <div class="flex flex-row gap-3 mt-6">
        <Card class="w-1/2">
          <template #title>
            <div class="flex flex-row justify-between mb-12">
              <div>
                <span class="one"> تعریف شخص </span>
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
                <span class="one"> لیست واریزی </span>
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
.finance {
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
    padding: 60px 0;
    .text-buttom {
      font-weight: 400;
      font-size: 16px;
      color: #1f2937;
    }
  }
  .in1 {
    background-color: #eff6ff;
    border-radius: 50%;
  }
  .in2 {
    background-color: #f6fde7;
    border-radius: 50%;
  }
  .in3 {
    background-color: #f6eeff;
    border-radius: 50%;
  }
  .in4 {
    background-color: #f0fdf4;
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
      background-color: #007aff;
      path {
        color: white;
        stroke: white;
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
      background-color: #93cc1a;
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
    .in3 {
      background-color: #9747ff;
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
      background-color: #02cd79;
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
