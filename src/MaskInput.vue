<template>
  <input
      ref="maskedInput"
      v-bind="$attrs"
      @input="handleInput"
      :type="type"
      :class="className"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      :id="id"
      :autocomplete="autocomplete"
      :readonly="readonly"
  />
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';
import { maskDefinitions } from './maskDefinitions.js';

export default defineComponent({
  name: 'MaskInputComponent',

  inheritAttrs: false,

  props: {
    mask: {
      type: String as PropType<string>,
      required: true,
    },
    type: {
      type: String as PropType<string>,
      default: 'text',
    },
    className: {
      type: String as PropType<string>,
    },
    placeholder: {
      type: String as PropType<string>,
      default: '',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    name: {
      type: String as PropType<string>,
      default: '',
    },
    id: {
      type: String as PropType<string>,
      default: '',
    },
    autocomplete: {
      type: String as PropType<string>,
      default: 'off',
    },
    readonly: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const maskedInput = ref<HTMLInputElement | null>(null);

    function handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      const maskedValue = applyMask(target.value);
      target.value = maskedValue;
      emit('update:modelValue', maskedValue);
    }

    function applyMask(value: string): string {
      const maskedValue: string[] = [];
      let unmaskedIndex = 0;
      let maskIndex = 0;

      while (unmaskedIndex < value.length && maskIndex < props.mask.length) {
        const maskChar = props.mask[maskIndex];
        const unmaskedChar = value[unmaskedIndex];
        const maskDefinition = maskDefinitions[maskChar];

        if (maskDefinition) {
          if (maskDefinition.escape) {
            maskIndex++;
            maskedValue.push(value[unmaskedIndex]);
            unmaskedIndex++;
          } else if (maskDefinition.pattern.test(unmaskedChar)) {
            const transformedChar = maskDefinition.transform
                ? maskDefinition.transform(unmaskedChar)
                : unmaskedChar;
            maskedValue.push(transformedChar);
            unmaskedIndex++;
          } else {
            break;
          }
        } else {
          maskedValue.push(maskChar);
          if (maskChar === unmaskedChar) {
            unmaskedIndex++;
          }
        }
        maskIndex++;
      }

      return maskedValue.join('');
    }

    return {
      maskedInput,
      handleInput,
    };
  },
});
</script>
