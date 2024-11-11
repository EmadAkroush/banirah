<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center ">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic " />
        <div class="mr-2 text-right">
          <p class="text-right">عملیات</p>
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
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/1.svg" alt="" />
              <p class="m-0 pt-3 text-buttom">فرآیند بارگیری</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/2.svg" alt="" />
              <p class="m-0 pt-3">پرداخت</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/3.svg" alt="" />
              <p class="m-0 pt-3">ارسال بار</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/4.svg" alt="" />
              <p class="m-0 pt-3">صورت وضعیت بار</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/5.svg" alt="" />
              <p class="m-0 pt-3">ترخیص بار</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6 ml-4">
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/6.svg" alt="" />
              <p class="m-0 pt-3">بارگیری مجدد</p>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <div class="flex flex-row gap-x-3 mt-4">
      <div class="basis-1/6">
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/1.svg" alt="" />
              <p class="m-0 pt-3 text-buttom">فرآیند بارگیری</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/2.svg" alt="" />
              <p class="m-0 pt-3">پرداخت</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/3.svg" alt="" />
              <p class="m-0 pt-3">ارسال بار</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/4.svg" alt="" />
              <p class="m-0 pt-3">صورت وضعیت بار</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6">
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/5.svg" alt="" />
              <p class="m-0 pt-3">ترخیص بار</p>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-1/6 ml-4">
        <Card class="cardout">
          <template #content>
            <div class="d-flex align-center justify-center cardmy">
              <img src="/public/opration/6.svg" alt="" />
              <p class="m-0 pt-3">بارگیری مجدد</p>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <div>
      <div class="flex flex-row">
        <Card class="card-bar mt-7">
          <template #title> <h2>درخواست های تحویل بار</h2> </template>
          <template #content>
            <div class="flex flex-row gap-3">
              <Card class="w-1/2">
                <template #title>
                  <div class="flex flex-row justify-between mb-12">
                    <div>
                      <span class="one"> شماره سفارش: </span>
                      <span class="two"> ۹۸۷۶۵۵۴۴۳۳ </span>
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
                      <span class="one"> شماره سفارش: </span>
                      <span class="two"> ۹۸۷۶۵۵۴۴۳۳ </span>
                    </div>
                    <div class="right flex items-center justify-center ">
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
                          درخواست کننده  <br>
                          <span class="down-date">
                            ۲۵ اردیبهشت ۱۴۰۳ 
                          </span>
                        
                        </p>
                      </Step>
                      <Step value="2"> 
                        <p>
                           تایید اداری  <br>
                           <span class="down-date">
                            ۲۵ اردیبهشت ۱۴۰۳ 
                          </span>
                        </p>
                      </Step>
                      <Step value="3"> 
                        <p>
                           تایید مدیریت  <br>
                           <span class="down-date">
                            ۲۵ اردیبهشت ۱۴۰۳ 
                          </span>
                        </p>
                      </Step>
                    </StepList>
                  </Stepper>
                </template>
              </Card>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.main {
  background-color: #f3f4f6;


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
    .text-buttom {
      font-weight: 400;
      font-size: 16px;
      color: #1f2937;
    }
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
      color: #22C55E;
      width: 102px;
      height: 36px;
      font-size: 14px;
      font-weight: 400px;
      border-radius: 100px;;
  
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
