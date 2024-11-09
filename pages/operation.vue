<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center" >
        <img src="/public/opration/Calender.svg" alt="">
      </div>
      <div>fsfs</div>
    </div>
    <div class="flex flex-row gap-x-3">
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
                  <div class="flex flex-row justify-between">
                    <div>jkhgj</div>
                    <div>jkhgj</div>
                  </div>
                </template>
                <template #content>
                  <Stepper value="1">
                    <StepList>
                      <Step value="1">Header I</Step>
                      <Step value="2">Header II</Step>
                      <Step value="3">Header III</Step>
                    </StepList>
                    <StepPanels>
                      <StepPanel v-slot="{ activateCallback }" value="1">
                        <div class="flex flex-col h-48">
                          <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                          >
                            Content I
                          </div>
                        </div>
                        <div class="flex pt-6 justify-end">
                          <Button
                            label="Next"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            @click="activateCallback('2')"
                          />
                        </div>
                      </StepPanel>
                      <StepPanel v-slot="{ activateCallback }" value="2">
                        <div class="flex flex-col h-48">
                          <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                          >
                            Content II
                          </div>
                        </div>
                        <div class="flex pt-6 justify-between">
                          <Button
                            label="Back"
                            severity="secondary"
                            icon="pi pi-arrow-left"
                            @click="activateCallback('1')"
                          />
                          <Button
                            label="Next"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            @click="activateCallback('3')"
                          />
                        </div>
                      </StepPanel>
                      <StepPanel v-slot="{ activateCallback }" value="3">
                        <div class="flex flex-col h-48">
                          <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                          >
                            Content III
                          </div>
                        </div>
                        <div class="pt-6">
                          <Button
                            label="Back"
                            severity="secondary"
                            icon="pi pi-arrow-left"
                            @click="activateCallback('2')"
                          />
                        </div>
                      </StepPanel>
                    </StepPanels>
                  </Stepper>
                </template>
              </Card>
              <Card class="w-1/2"> </Card>
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
  }
}
</style>
