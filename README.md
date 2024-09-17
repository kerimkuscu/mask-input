# My Mask Library

## 🚀 Overview

`mask-input` is a Vue.js component library that provides an easy-to-use input masking solution. With flexible masking options, you can format user input for phone numbers, credit cards, dates, and more. This library offers a seamless way to enforce input formats and ensure data consistency in your Vue.js applications.

## 📦 Installation

To get started with `mask-input`, follow these steps:

### 1. Install the Package

You can install the library via npm or yarn:

#### Using npm

```bash
npm install my-mask-library
or
yarn add my-mask-library
```
## 📘 Usage
Once installed, you can import and use the MaskInputComponent in your Vue.js application. Here's a step-by-step guide on how to integrate it:

### 1. Import and Register the Component
In your main entry file (e.g., main.js or main.ts), import the MaskInputComponent and register it globally or locally in your components.

#### Global Registration
```bash
import { createApp } from 'vue';
import App from './App.vue';
import MaskInputComponent from 'my-mask-library';

// Create your Vue app
const app = createApp(App);

// Register the component globally
app.component('MaskInputComponent', MaskInputComponent);

// Mount the app
app.mount('#app');
```

#### Local Registration
In the component where you want to use the masked input:
```bash
<template>
  <div>
    <MaskInputComponent
      v-model="maskedValue"
      mask="(###) ###-####"
      type="text"
      className="masked-input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MaskInputComponent from 'mask-input';

export default defineComponent({
  components: {
    MaskInputComponent
  },
  setup() {
    const maskedValue = ref('');
    return {
      maskedValue
    };
  }
});
</script>
```

### 2. Component Props
   The MaskInputComponent accepts the following props:

mask (String, Required): The mask pattern to be applied to the input. Example: "(###) ###-####".
type (String, Optional): The type of the input. Defaults to "text".
className (String, Optional): Additional CSS class names to apply to the input.
### 3. Handling Events
   The component emits the following event:

update:modelValue: Emitted when the masked value changes. You can use this event to update your model value or handle changes in your application.

```bash
<template>
  <div>
    <MaskInputComponent
      v-model="maskedValue"
      mask="####-####-####-####"
      @update:modelValue="handleUpdate"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MaskInputComponent from 'mask-input';

export default defineComponent({
  components: {
    MaskInputComponent
  },
  setup() {
    const maskedValue = ref('');

    function handleUpdate(newValue: string) {
      console.log('Updated masked value:', newValue);
      maskedValue.value = newValue;
    }

    return {
      maskedValue,
      handleUpdate
    };
  }
});
</script>
```
## 📝 Contributing
We welcome contributions! If you have any ideas, suggestions, or bug fixes, please feel free to open an issue or submit a pull request.

## 🔗 License
This project is licensed under the MIT License.
