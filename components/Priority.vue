<template>
  <div>
    <v-card :class="[
        state? `is-${state}`:''
      ]">
      <v-card-title class="headline">{{title}}</v-card-title>
      <v-card-text>
        <p>{{description}}</p>
        <v-chip
          v-for="(categorie, index) in categories"
          :key="index"
          label 
          outline 
          color="primary">
            {{categorie}}
          </v-chip>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Priority',
  props: {
    title: {
      type: String,
      default: 'Priority'
    },
    description: {
      type: String,
      default: '-'
    },
    categories: {
      type: Array
    },
    state: {
      type: String,
      default: 'default'
    }
  }
}
</script>
<style lang="scss" scoped>
.is-todo {
    border-left: 3px solid rgba(24, 32, 44, 0.678) !important;
}
.is-done {
    border-left: 3px solid rgba(5, 133, 22, 0.678) !important;
}
</style>

