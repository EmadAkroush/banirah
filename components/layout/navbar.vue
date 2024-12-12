<template>
  <div class="navbar">
    <div class="flex flex-row justify-between px-6 py-3">
      <div class="flex flex-row items-center">
        <div>
          <IconField class="search">
            <InputIcon>
              <img src="/public/navbar/icon.svg" alt=""  />
            </InputIcon>
            <InputText class="a" placeholder="جستجو" size="small" />
          </IconField>
        </div>
      </div>
      <div class="flex info-bar">
        <div class="basis-2/4">
          <div class="flex justify-end">
            <div class="flex items-center justify-center notif">
              <OverlayBadge severity="danger">
                <img
                  src="/public/navbar/icons-Line-Mail.svg"          
                  alt=""
                />
              </OverlayBadge>
            </div>
            <div class="flex items-center justify-center notif mr-4">
              <OverlayBadge severity="danger">
                <img src="/public/navbar/icons-Line-notification.svg" alt="" />
              </OverlayBadge>
            </div>
          </div>
        </div>
        
        <div class="basis-3/4">
          <div class="flex justify-end ml-4">
            
            <div>
              <p class="top">افرا صانعی نیا نیک</p>
              <p class="down">سمت سازمانی</p>
            </div>
            <img src="/public/navbar/avatar.svg" alt="" class="mr-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.navbar {
  height: 72px;

  .info-bar {
    width: 400px;
    .top {
      font-size: 16px;
      font-weight: 400;
    }
    .down {
      font-size: 14px;
      font-weight: 400;
    }
  }
  .notif {
    background-color: #f3f4f6;
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
}
.search {
  border-radius: 16px;
  background-color: #f3f4f6;

  .a {
    border-radius: 16px;
    background-color: #f3f4f6;
    font-size: 16px;
    width: 300px;
    height: 48px;
  }
}
</style>
