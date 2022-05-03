<template>
  <IxRow align="center">
    <IxCol :span="4" class="text-center">
      <IxAvatar text="USER" />
    </IxCol>
    <IxCol :span="20">
      <div>name</div>
      <div>e-mail</div>
    </IxCol>
  </IxRow>
  <div class="p-1">
    <IxInput placeholder="Search">
      <template #suffix>
        <IxIcon name="search" />
      </template>
    </IxInput>
  </div>
  <IxMenu :dataSource="dataSource" />
</template>

<script setup lang="ts">
  import { MenuData } from '@idux/components/menu';
  import { useI18n } from '@/hooks/web/useI18n';
  const { $t } = useI18n();

  const dataSource: MenuData[] = [
    { key: 'myDay', icon: 'heat', label: $t('main.menu.myDay') },
    { key: 'important', icon: 'star', label: $t('main.menu.important') },
    { key: 'plan', icon: 'calendar', label: $t('main.menu.plan') },
    { key: 'all', icon: 'normal', label: $t('main.menu.all') },
    { key: 'done', icon: 'check-circle', label: $t('main.menu.done') },
    { key: 'mine', icon: 'user', label: $t('main.menu.mine') },
    { key: 'task', icon: 'home', label: $t('main.menu.task') },
    { type: 'divider', key: 'divider1' },
  ];
</script>
