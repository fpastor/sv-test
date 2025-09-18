import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
