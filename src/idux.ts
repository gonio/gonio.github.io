import type { App } from 'vue';

import IduxCdk from '@idux/cdk';
import IduxComponents from '@idux/components';

import '@idux/components/default.min.css';
import '@idux/pro/default.min.css';

import { createGlobalConfig } from '@idux/components/config';

// 动态加载：不会被打包，可以减小包体积，需要加载的时候时候 http 请求加载
// 注意：请确认图标的 svg 资源依旧被正确放入到 `public/idux-icons` 目录中
const loadIconDynamically = (iconName: string) => {
  return fetch(`/idux-icons/${iconName}.svg`).then((res) => res.text());
};

const globalConfig = createGlobalConfig({
  // 默认为中文，可以打开注释设置为其他语言
  // locale: enUS,
  icon: { loadIconDynamically },
});

const install = (app: App): void => {
  app.use(IduxCdk).use(IduxComponents).use(globalConfig);
};

export default { install };
