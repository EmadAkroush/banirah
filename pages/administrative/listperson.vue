<template>
  <div class="finance p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">تعریف شخص</p>
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
    <div class="card">
      <div class="p-4">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <!-- <img class="w-10 h-10 rounded-full ml-4" src="path/to/avatar.png" alt="User Avatar"> -->
            <div class="relative">
              <img
                src="/public/listbargiry/icons-Line-search.png"
                alt=""
                style="position: absolute; top: 8px; left: 10px"
              />
              <input
                type="text"
                placeholder="جستجوی پیشرفته"
                class="border rounded-lg px-8 py-2"
              />
            </div>
          </div>
          <nuxt-link to="/administrative/defineperson">
            <button
              class="border border-green-600 text-green-600 px-4 py-2 rounded"
            >
              درخواست جدید
            </button>
          </nuxt-link>
        </div>

        <div
          style="
            background-color: white;
            width: 100%;
            height: 100%;
            padding: 20px;
            border-radius: 12px;
          "
        >
        
          <DataTable :value="tableData" class="p-datatable-gridlines" style="text-align: right;">
            <Column field="index"  style="text-align: right;" header="ردیف" sortable></Column>
            <Column field="namefamily" style="text-align: right;" header="نام و نام خانودگی" sortable></Column>
            <Column field="kodemeli" style="text-align: right;" header="کدملی" sortable>  </Column>
            <Column field="kodetafzil" style="text-align: right;" header="کد تفضیلی" sortable></Column>
            <Column field="noetafzil" style="text-align: right;" header="نوع تفضیلی " sortable></Column>
            <Column field="noe" style="text-align: right;" header="نوع " sortable></Column>
            <Column field="kodeshakhs" style="text-align: right;" header="کد شخص " sortable></Column>
            <Column field="jensiat" style="text-align: right;" header="جنسیت" sortable></Column>  
         
          </DataTable>
        </div>
        <div class="flex justify-between items-center mt-4">
          <Paginator
            :rows="10"
            :totalRecords="120"
            :rowsPerPageOptions="[10, 20, 30]"
          ></Paginator>

          <span>صفحه شماره ۲</span>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>
<style lang="scss">
.finance {
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
          kodetafzil: 8888,
          noetafzil: "عنوان تفضیلی",
          noe: "عمومی",
          kodeshakhs: 1724546,
          jensiat : "زن"
          },
          {
          index: 1,
          namefamily: " مهربان مهاجر جوان",
          kodemeli: 9288444,
          kodetafzil: 8888,
          noetafzil: "عنوان تفضیلی",
          noe: "عمومی",
          kodeshakhs: 1724546,
          jensiat : "زن"
          },
          {
          index: 1,
          namefamily: " مهربان مهاجر جوان",
          kodemeli: 9288444,
          kodetafzil: 8888,
          noetafzil: "عنوان تفضیلی",
          noe: "عمومی",
          kodeshakhs: 1724546,
          jensiat : "زن"
          },
          {
          index: 1,
          namefamily: " مهربان مهاجر جوان",
          kodemeli: 9288444,
          kodetafzil: 8888,
          noetafzil: "عنوان تفضیلی",
          noe: "عمومی",
          kodeshakhs: 1724546,
          jensiat : "زن"
          },
          {
          index: 1,
          namefamily: " مهربان مهاجر جوان",
          kodemeli: 9288444,
          kodetafzil: 8888,
          noetafzil: "عنوان تفضیلی",
          noe: "عمومی",
          kodeshakhs: 1724546,
          jensiat : "زن"
          },
          {
          index: 1,
          namefamily: " مهربان مهاجر جوان",
          kodemeli: 9288444,
          kodetafzil: 8888,
          noetafzil: "عنوان تفضیلی",
          noe: "عمومی",
          kodeshakhs: 1724546,
          jensiat : "زن"
          },

        
       
   

        // Repeat as needed...
      ],
    };
  },
};
</script>
