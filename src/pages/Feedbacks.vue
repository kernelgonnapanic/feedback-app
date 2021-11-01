<script setup>
import data from "../../data/feedbacks";
import FeedbackCell from "../components/FeedbackCell.vue";
</script>

<template>
  <FeedbackCell
    class="feedback-cell"
    v-for="feedback in data"
    :key="feedback.id"
    :feedback="feedback"
  />
</template>

<style scoped lang="scss">
.feedback-cell + .feedback-cell {
  margin-top: 20px;
}
</style>
