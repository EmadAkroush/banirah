<template>
  <div class="flex flex-row">
    <div class="basis-1/6">
      <LayoutSidebar> </LayoutSidebar>
    </div>
    <div class="basis-5/6">
        <LayoutNavbar></LayoutNavbar>
      <slot>
      </slot>
    </div>

  </div>
</template>

