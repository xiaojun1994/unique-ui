<template>
  <div
    :class="classList"
    :style="style"
    @click="onClick"
  >
    <div class="i-switch__node">
      <i-spinner
        v-if="loading"
        type="crescent"
        size="16px"
        color="#ccc"
      ></i-spinner>
    </div>
  </div>
</template>

<script>
import ISpinner from 'unique-ui/packages/spinner'

export default {
  name: 'ISwitch',
  components: { ISpinner },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    loading: Boolean
  },
  computed: {
    classList() {
      return [
        'i-switch',
        {
          'i-switch--on': this.value,
          'i-switch--disabled': this.disabled
        }
      ]
    },
    style() {
      return {
        backgroundColor: this.value ? this.activeColor : this.inactiveColor
      }
    }
  },
  methods: {
    onClick() {
      !this.disabled && !this.loading && this.$emit('change', !this.value)
    }
  }
}
</script>

