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
      <div class="basis-1/4">
        <Card class="cardout c1">
          <template #content>
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
              <p class="m-0 pt-9 text-buttom">درخواست خرید</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/4">
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
              <p class="m-0 pt-9 text-buttom">ثبت ورود خروج</p>
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
    background-color: #F6FDE7;
    border-radius: 50%;
  }
  .in2 {
    background-color: #EFF6FF;
    border-radius: 50%;
  }
  .in3 {
    background-color: #fdf1ff;
    border-radius: 50%;
  }
  .in4 {
    background-color: #fffaef;
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
      background-color: #93CC1A;
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
      background-color: #007AFF;
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
      background-color: #c600ff;
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
      background-color: #f2a002;
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
