<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right"> قرارداد</p>
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

    <div>
      <div class="card">
        <div class="p-4">
          <Card class="px-12 mb-4" style="height: 100px; box-shadow: none">
            <template #content>
              <Stepper value="2">
                <StepList>
                  <Step value="1"> درخواست کننده </Step>
                  <Step value="2">  مدیر عملیات  </Step>
                  <Step value="3"> تایید مالی </Step>
                  <Step value="4"> تایید مدیر بازار </Step>
                  <Step value="5"> تایید مدیریت </Step>
                </StepList>
              </Stepper>
            </template>
          </Card>

          <div
            style="
              background-color: white;
              width: 100%;
              height: 100%;
              padding: 20px;
              border-radius: 12px;
            "
          >
            <div>
              <h1 style="font-size: 22px; font-weight: bold" class="my-3">
                قرارداد حمل گاز
              </h1>
            </div>
            <DataTable
              :value="tableData"
              class="p-datatable-gridlines"
              style="text-align: right"
            >
              <Column
                field="index"
                style="text-align: right"
                header="ردیف"
                sortable
              ></Column>
              <Column
                field="namefamily"
                style="text-align: right"
                header="نام و نام خانودگی"
                sortable
              ></Column>
              <Column
                field="tarikh"
                style="text-align: right"
                header="تاریخ قرارداد"
                sortable
              >
              </Column>
              <Column
                field="modate"
                style="text-align: right"
                header="مدت قرارداد"
                sortable
              ></Column>
              <Column
                field="noe"
                style="text-align: right"
                header="نوع "
                sortable
              ></Column>
              <Column
                field="shomare"
                style="text-align: right"
                header="شماره انتظامی"
                sortable
              ></Column>
            </DataTable>
          </div>
          <div class="flex justify-between mt-4">
            <div>
              <Button
                label="دانلود فایل قرارداد"
                class="p-button-text text-green-700 border-green-700"
                style="background-color: #cedccd; color: #0c4e07"
              />
            </div>
            <div>
              <nuxt-link to="/administrative/Contract/gas">
                <Button
                  label="درخواست جدید"
                  class="p-button-outlined"
                  style="
                    width: 150px;
                    color: #246020;
                    border: 1px solid #246020;
                  "
                />
              </nuxt-link>
              <nuxt-link to="/administrative">
                <Button
                  label="صفحه اصلی"
                  class="mr-2 bg-green-600 text-white"
                  style="width: 150px; background-color: #246020"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.main {
  background-color: #f3f4f6;
  .p-datatable-tbody > tr > td {
    text-align: right;
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
      tableData: [
        {
          index: 1,
          namefamily: " مهربان مهاجر جوان",
          kodemeli: 9288444,
          tarikh: "1403/12/10",
          modate: "3 ماه",
          noe: "صادرات",
          shomare: "456321",
        },

        // Repeat as needed...
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
