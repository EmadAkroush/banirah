<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">قرارداد</p>
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
      <div class="p-8 bg-white rounded-lg mx-auto mt-8">
        <h2 class="text-xl font-semibold mb-4">قرارداد کریری</h2>
        <form class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label for="firstName" class="block text-gray-700">نام شرکت</label>
            <InputText
              id="firstName"
              v-model="form.firstName"
              class="mt-1 block w-full"
              placeholder="نام و نام خانوادگی "
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700"
              >نام و نام خانوادگی نماینده</label
            >
            <InputText
              id="email"
              v-model="form.email"
              class="mt-1 block w-full"
              placeholder="نام "
            />
          </div>
          <div>
            <label for="phone" class="block text-gray-700">کدملی</label>
            <InputText
              id="phone"
              v-model="form.phone"
              class="mt-1 block w-full"
              placeholder="کدملی"
            />
          </div>

          <div>
            <label for="date" class="block text-gray-700">شماره تلفن</label>
            <InputText
              id="phone"
              v-model="form.phone"
              class="mt-1 block w-full"
              placeholder="0920008885 "
            />
          </div>
          <div>
            <label for="address" class="block text-gray-700"> آدرس</label>
            <InputText
              id="address"
              v-model="form.address"
              class="mt-1 block w-full"
              placeholder="0920008885"
            />
          </div>
          <div class="flex flex-col text-right">
            <label for="product-type" class="mb-1 text-gray-700"> نوع کالا</label>
            <Dropdown
              id="product-type"
              :options="dropdownOptions"
              optionLabel="label"
              placeholder="یک مورد را انتخاب کنید"
              class="w-full"
            />
          </div>
          <div>
            <label for="address" class="block text-gray-700"> وزن کالا</label>
            <InputText
              id="address"
              v-model="form.address"
              class="mt-1 block w-full"
              placeholder="0920008885"
            />
          </div>
          <div class="flex flex-col text-right">
            <label for="product-type" class="mb-1 text-gray-700"> مبدا  </label>
            <Dropdown
              id="product-type"
              :options="dropdownOptions"
              optionLabel="label"
              placeholder="یک مورد را انتخاب کنید"
              class="w-full"
            />
          </div>
          <div class="flex flex-col text-right">
            <label for="product-type" class="mb-1 text-gray-700"> مقصد  </label>
            <Dropdown
              id="product-type"
              :options="dropdownOptions"
              optionLabel="label"
              placeholder="یک مورد را انتخاب کنید"
              class="w-full"
            />
          </div>
          <div class="flex flex-col text-right">
            <label for="product-type" class="mb-1 text-gray-700"> گمرک خروجی  </label>
            <Dropdown
              id="product-type"
              :options="dropdownOptions"
              optionLabel="label"
              placeholder="یک مورد را انتخاب کنید"
              class="w-full"
            />
          </div>




          <div>
            <label for="date" class="mb-2 text-gray-700">تاریخ</label>
            <PersianDatePicker v-model="selectedDate" class="mt-2" />
          </div>
          <div class="flex flex-col text-right">
            <label for="product-type" class="mb-1 text-gray-700">به مدت</label>
            <Dropdown
              id="product-type"
              :options="dropdownOptions"
              optionLabel="label"
              placeholder="یک مورد را انتخاب کنید"
              class="w-full"
            />
          </div>
          <div>
            <label for="address" class="block text-gray-700"> قیمت هر تناژ </label>
            <InputText
              id="address"
              v-model="form.address"
              class="mt-1 block w-full"
              placeholder="ریال"
            />
          </div>
          <div class="flex flex-col text-right">
            <label for="product-type" class="mb-1 text-gray-700"
              >بارگذاری امضاء
            </label>
            <FileUpload
              name="demo[]"
              url="/api/upload"
              @upload="onAdvancedUpload($event)"
              :multiple="true"
              accept="image/*"
              :maxFileSize="1000000"
            >
              <template #empty>
                <span> کشیدن و رها کردن فایل </span>
              </template>
            </FileUpload>
          </div>
          <div class="flex flex-col text-right">
            <div class="flex items-center gap-2">
              <Checkbox
                v-model="piza"
                inputId="ingredient1"
                name="pizza"
                value="Cheese"
              />
              <label for="ingredient1">
                قوانین و شرایط قرارداد را خوانده و می پذیرم
              </label>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="col-span-2 flex justify-end mt-4">
            <nuxt-link to="">
              <Button
                label="انصراف"
                class="p-button-outlined"
                style="color: #246020; border: 1px solid #246020; width: 150px"
              />
            </nuxt-link>

            <Button
              label="ثبت"
              class="text-white px-4 py-2 mr-3"
              style="
                background-color: #246020;
                border: 1px solid #246020;
                width: 150px;
              "
            />
          </div>
        </form>
      </div>
    </div>
    <div class="flex mt-4">
      <Button
        label="مشاهده قوانین"
        class="p-button-text text-green-700 border-green-700"
        style="background-color: #cedccd; color: #0c4e07"
      />
      <Button
        label="مشاهده قرارداد"
        class="p-button-text text-green-700 border-green-700 mr-4"
        style="background-color: #cedccd; color: #0c4e07"
      />
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
      piza: null,
      form: {
        firstName: "",
        email: "",
        phone: "",
        date: null,
        qty: null,
        address: "",
      },
      dropdownOptions: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        // Add more options as needed
      ],
    };
  },
  methods: {
    handleCancel() {
      this.form = {
        firstName: "",
        email: "",
        phone: "",
        date: null,
        qty: null,
        address: "",
      };
    },
  },
};
</script>
