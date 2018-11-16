import { CERTIFICATIONS_REQUEST } from './mutation-types'

export default {
  [CERTIFICATIONS_REQUEST] (state, certifications) {
    state.priorities = certifications
  }
}
