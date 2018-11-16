<template>
  <v-layout
    justify-center
    align-center>
    <v-flex
      xs12>
      <div
        v-for="(cert, index) in certifications"
        :key="index">
        <v-flex xs12 mb-2>
          <priority
            :title="cert.title"
            :categories="cert.categories"
            :state="cert.state"
            :description="cert.description"/>
        </v-flex>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    VuetifyLogo,
    Priority: () => import('~/components/Priority.vue')
  },
  computed:  {
    ...mapGetters({
      certifications: 'certifications'
    })
  }
}
</script>
