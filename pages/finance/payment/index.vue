<template>
    <div class="main p-6">
      <div class="flex sec1">
        <div class="flex align-center">
          <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />
  
          <div class="mr-2 text-right">
            <p class="text-right"> پرداخت ها </p>
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
        
  
            <div
              style="
                background-color: white;
                width: 100%;
                height: 100%;
                padding: 20px;
                border-radius: 12px;
              "
            >
              
              <DataTable :value="tableData" class="p-datatable-gridlines">
                <Column field="index" header="ردیف" sortable></Column>
                <Column field="kodebar" header="کدبار" sortable></Column>
                <Column field="status" header="وضعیت" sortable>
             
                </Column>
                <Column field="tarikh" header="تاریخ بار" sortable></Column>
                <Column field="saheb" header="صاحب کالا" sortable></Column>
                <Column field="mabdae" header="مبداء" sortable></Column>
                <Column field="maghsad" header="مقصد " sortable></Column>
                <Column field="kala" header="کالا" sortable></Column>
                <Column field="tonazh" header="تناژ کل" sortable></Column>
            
         
              </DataTable>
         
            </div>
            <div class="flex justify-between items-center mt-4">
              <Paginator
                :rows="10"
                :totalRecords="120"
                :rowsPerPageOptions="[10, 20, 30]"
              ></Paginator>
  
              <span>صفحه شماره 1</span>
            </div>
            <div class="flex justify-end mt-4">
              <nuxt-link to="/finance/newdeposit">
                <Button
                  label="درخواست جدید"
                  class="p-button-outlined"
                  style="width: 150px; color: #246020; border: 1px solid #246020"
                />
              </nuxt-link>
              <nuxt-link to="/finance">
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
            kodebar: "1234",
            status: "قطعی شده",
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            saheb: "سید معیین ",
            mabdae: "آبادان", 
            maghsad: "هرات",
            kala: "گاز",
            tonazh: "162،132",
         
  
          },
          {
            index: 2,
            kodebar: "1234",
            status: "قطعی شده",
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            saheb: "سید معیین ",
            mabdae: "آبادان", 
            maghsad: "هرات",
            kala: "گاز",
            tonazh: "162،132",
         
  
          },
          {
            index: 3,
            kodebar: "1234",
            status: "قطعی شده",
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            saheb: "سید معیین ",
            mabdae: "آبادان", 
            maghsad: "هرات",
            kala: "گاز",
            tonazh: "162،132",
         
  
          },
          {
            index: 4,
            kodebar: "1234",
            status: "قطعی شده",
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            saheb: "سید معیین ",
            mabdae: "آبادان", 
            maghsad: "هرات",
            kala: "گاز",
            tonazh: "162،132",
         
  
          },
 
 
     
     
    
        ],
      };
    },
  };
  </script>
  