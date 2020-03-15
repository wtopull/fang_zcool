<template>
  <div class="job_card">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.job_card {
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>