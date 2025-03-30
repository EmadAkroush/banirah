<template>
    <div class="main p-6">
      <div class="flex sec1">
        <div class="flex align-center">
          <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />
  
          <div class="mr-2 text-right">
            <p class="text-right"> نامه ها</p>
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
              
            <div class="p-6 bg-white rounded-lg flex flex-col space-y-4">
            <!-- اطلاعات بالا -->

            <div class="flex justify-between items-center text-gray-500">
              <div class="flex items-center space-x-2">
                <img
                  src="/public/cartable/Mask group.png"
                  alt="Profile Picture"
                  class="w-8 h-8 rounded-full ml-2"
                />
                <span class="text-gray-800">نام فرستنده به نام گیرنده</span>
              </div>
              <div class="flex space-x-2 items-center">
                <div class="flex ml-8 items-center">
      
                  <span class="text-sm flex">شماره سند: ۱۲۳۴۵۶ </span>
                  <img src="/public/cartable/icons-Line-Folder_open_light.jpg" alt="" class="mr-2">
                </div>
                <div  class="flex items-center">
            
                  <span class="text-sm">۱۷ اردیبهشت ۱۴۰۳</span>
                  <img src="/public/cartable/icons-Line-Folder_open_light.jpg" alt="" class="mr-2">
                </div>

            
              </div>
            </div>

            <!-- عنوان و وضعیت -->
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-semibold text-gray-900">معرفی نامه</h2>
              <span class="text-gray-500">وضعیت: فعال</span>
            </div>

            <!-- محتوای نامه -->
            <p class="text-gray-700 text-justify">
              لورم ایپسوم متی کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
              گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
              نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
              طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،. لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
              طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
              متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در
              ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
              شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
              موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>

            <!-- ایکون‌ها و فایل‌ها -->
            <div class="flex justify-between items-center text-gray-600">
          
              <div class="flex justify-between space-x-2 text-blue-600">
                <div>
                  <a href="#" class="hover:underline ml-4">jeewrk.pdf</a>
                  <a href="#" class="hover:underline ml-4">jeewrk1.pdf</a>
                </div>
              
              </div>
              <div class="flex space-x-4 justify-center items-center">
                <div class="flex justify-center items-center" style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 50%;">
                 <img src="/public/cartable/icons-Line-printer.png" alt="">
                </div>
    
           
              </div>
            </div>
          </div>
         
            </div>
            <div class="flex justify-between items-center mt-4">
          
            </div>
            <div class="flex justify-end mt-4">
              <nuxt-link to="/cartable/newrequst">
                <Button
                  label="درخواست جدید"
                  class="p-button-outlined"
                  style="width: 150px; color: #246020; border: 1px solid #246020"
                />
              </nuxt-link>
              <nuxt-link to="/cartable">
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
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            mabdae: "مشهد",
            maghsad: "ارمنستان",
            teransit: "ترانزیت",
            gomrok: "فلان گمرک", 
            tonaj: "۸۹۷۷",
            noefaravardeh: "زمینی",
            namranndeh: "نام و نام خانوداگی",
            mablagh: "0 ریال",
  
          },
          {
            index: 1,
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            mabdae: "مشهد",
            maghsad: "ارمنستان",
            teransit: "ترانزیت",
            gomrok: "فلان گمرک", 
            tonaj: "۸۹۷۷",
            noefaravardeh: "زمینی",
            namranndeh: "نام و نام خانوداگی",
            mablagh: "0 ریال",
  
          },
          {
            index: 1,
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            mabdae: "مشهد",
            maghsad: "ارمنستان",
            teransit: "ترانزیت",
            gomrok: "فلان گمرک", 
            tonaj: "۸۹۷۷",
            noefaravardeh: "زمینی",
            namranndeh: "نام و نام خانوداگی",
            mablagh: "0 ریال",
  
          },
          {
            index: 1,
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            mabdae: "مشهد",
            maghsad: "ارمنستان",
            teransit: "ترانزیت",
            gomrok: "فلان گمرک", 
            tonaj: "۸۹۷۷",
            noefaravardeh: "زمینی",
            namranndeh: "نام و نام خانوداگی",
            mablagh: "0 ریال",
  
          },
          {
            index: 1,
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            mabdae: "مشهد",
            maghsad: "ارمنستان",
            teransit: "ترانزیت",
            gomrok: "فلان گمرک", 
            tonaj: "۸۹۷۷",
            noefaravardeh: "زمینی",
            namranndeh: "نام و نام خانوداگی",
            mablagh: "0 ریال",
  
          },
          {
            index: 1,
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            mabdae: "مشهد",
            maghsad: "ارمنستان",
            teransit: "ترانزیت",
            gomrok: "فلان گمرک", 
            tonaj: "۸۹۷۷",
            noefaravardeh: "زمینی",
            namranndeh: "نام و نام خانوداگی",
            mablagh: "0 ریال",
  
          },
          {
            index: 1,
            tarikh: "۲ اردیبهشت ۱۴۰۲",
            mabdae: "مشهد",
            maghsad: "ارمنستان",
            teransit: "ترانزیت",
            gomrok: "فلان گمرک", 
            tonaj: "۸۹۷۷",
            noefaravardeh: "زمینی",
            namranndeh: "نام و نام خانوداگی",
            mablagh: "0 ریال",
  
          },
     
     
    
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
  