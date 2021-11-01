<script setup lang="ts">
import { PropType } from "@vue/runtime-core";
import { Feedback } from "../../data/feedbacks";

defineProps({
  feedback: Object as PropType<Feedback>,
});
</script>

<template>
  <div class="feedback">
    <h2>{{ feedback.title }}</h2>
    <div>{{ feedback.votes }}</div>
  </div>
</template>

<style scoped lang="scss">
.feedback {
  padding: 28px 32px;
  background-color: white;
  border-radius: 10px;

  h2 {
    font-family: "Jost", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #3a4374;
  }
}
</style>
