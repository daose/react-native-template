import React from 'react';
import { ScrollView, Button, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const MenuComponent = () => (
  <ScrollView style={styles.container}>
    <View style={styles.button}>
      <Button
        onPress={Actions.LOGIN}
        title="Login Form"
      />
    </View>
    <View style={styles.button}>
      <Button
        onPress={Actions.REDDIT}
        title="Network Request"
      />
    </View>
  </ScrollView>
);

export default MenuComponent;
