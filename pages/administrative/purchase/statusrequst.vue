<template>
    <div class="main p-6">
      <div class="flex sec1">
        <div class="flex align-center">
          <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />
  
          <div class="mr-2 text-right">
            <p class="text-right">درخواست بارگیری</p>
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
            <Card class="px-12 mb-4" style="height: 100px; box-shadow: none;">
              <template #content>
                <Stepper value="2">
                  <StepList>
                    <Step value="1"> درخواست کننده </Step>
                    <Step value="2"> تایید اداری </Step>
                    <Step value="3"> تایید مدیریت </Step>
                    <Step value="4"> مالی </Step>
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
            <div class="flex justify-between ">
                <h1 class="text-lg font-semibold mt-2 mb-2"> لیست درخواست های خرید </h1> 
                <div
                    class="flex justify-center items-center mb-2"
                    style="
                      width: 40px;
                      height: 40px;
                      background-color: #f3f4f6;
                      border-radius: 50%;
                    "
                  >
                    <img src="/public/cartable/icons-Line-printer.png" alt="" />
                  </div>
              </div>
              
              <DataTable :value="tableData" class="p-datatable-gridlines">
                <Column field="index" header="ردیف" sortable></Column>
                <Column field="vahed" header="واحد مربوطه" sortable></Column>
                <Column field="tarikh" header="تاریخ" sortable>
             
                </Column>
                <Column field="kala" header="نوع کالا" sortable></Column>
                <Column field="tedad" header="تعداد کالا" sortable></Column>
                <Column field="mablagh" header="مبلغ " sortable></Column>
                <Column field="olaviat" header="اولویت" sortable></Column>
                <Column field="tamin" header="تامین کننده " sortable></Column>
               
           
  
  
  
         
              </DataTable>
         
            </div>
       
            <div class="flex justify-end mt-4">
              <nuxt-link to="/administrative/purchase/newrequst">
                <Button
                  label="درخواست جدید"
                  class="p-button-outlined"
                  style="width: 150px; color: #246020; border: 1px solid #246020"
                />
              </nuxt-link>
              <nuxt-link to="/administrative/purchase">
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
            vahed: "واحد مالی",
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            kala: "ماوس",
            tedad: "10 عدد",
            mablagh: "1،000،000 ریال",
            olaviat: "الویت", 
            tamin: "تامین کننده"
  
          },
          {
            index: 1,
            vahed: "واحد مالی",
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            kala: "ماوس",
            tedad: "10 عدد",
            mablagh: "1،000،000 ریال",
            olaviat: "الویت", 
            tamin: "تامین کننده"
  
          },
          {
            index: 1,
            vahed: "واحد مالی",
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            kala: "ماوس",
            tedad: "10 عدد",
            mablagh: "1،000،000 ریال",
            olaviat: "الویت", 
            tamin: "تامین کننده"
  
          },
          {
            index: 1,
            vahed: "واحد مالی",
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            kala: "ماوس",
            tedad: "10 عدد",
            mablagh: "1،000،000 ریال",
            olaviat: "الویت", 
            tamin: "تامین کننده"
  
          },
          {
            index: 1,
            vahed: "واحد مالی",
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            kala: "ماوس",
            tedad: "10 عدد",
            mablagh: "1،000،000 ریال",
            olaviat: "الویت", 
            tamin: "تامین کننده"
  
          },
          {
            index: 1,
            vahed: "واحد مالی",
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            kala: "ماوس",
            tedad: "10 عدد",
            mablagh: "1،000،000 ریال",
            olaviat: "الویت", 
            tamin: "تامین کننده"
  
          },
          {
            index: 1,
            vahed: "واحد مالی",
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            kala: "ماوس",
            tedad: "10 عدد",
            mablagh: "1،000،000 ریال",
            olaviat: "الویت", 
            tamin: "تامین کننده"
  
          },
    

     
     
    
        ],
      };
    },
  };
  </script>
  