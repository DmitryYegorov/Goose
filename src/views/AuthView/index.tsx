import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const AuthView = () => {
  const navigator = useNavigation();

  const navigateToRegistration = () => {
    // @ts-ignore
    navigator.navigate('RegistrationView');
  };

  return (
    <View style={styles.container}>
      <Input label={'E-Mail'} />
      <Input label={'Password'} secureTextEntry />
      <View style={styles.row}>
        <Button title={'Sign In'} />
        <Button
          title={'Create new account'}
          type={'clear'}
          onPress={navigateToRegistration}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    width: '90%',
    alignSelf: 'center',
    marginTop: 150,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default AuthView;
