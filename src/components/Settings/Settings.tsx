import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import {
  Gear,
  Notification,
  Chat,
  Database,
  Users,
} from 'phosphor-react-native';

import { ProfileInfo } from '../ProfileInfo';
import SettingsItem from './SettingsItem';

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileInfo />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <SettingsItem
          icon={<Gear />}
          title="Account"
          subtitle="Change account settings"
        />
        <SettingsItem
          icon={<Chat />}
          title="Chats"
          subtitle="Change chats settings"
        />
        <SettingsItem
          icon={<Notification />}
          title="Notifications"
          subtitle="Change notifications settings"
        />
        <SettingsItem
          icon={<Database />}
          title="Storage and data"
          subtitle="Change storage and data settings"
        />
        <SettingsItem
          icon={<Users />}
          title="Help"
          subtitle="You need some help"
        />
        <SettingsItem
          icon={<Gear />}
          title="Account"
          subtitle="Change account settings"
        />
        <SettingsItem
          icon={<Chat />}
          title="Chats"
          subtitle="Change chats settings"
        />
        <SettingsItem
          icon={<Notification />}
          title="Notifications"
          subtitle="Change notifications settings"
        />
        <SettingsItem
          icon={<Database />}
          title="Storage and data"
          subtitle="Change storage and data settings"
        />
        <SettingsItem
          icon={<Users />}
          title="Help"
          subtitle="You need some help"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});
