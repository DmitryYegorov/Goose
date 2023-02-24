import * as React from 'react';
import { Text, View } from 'react-native';
import TextInput from '../../components/ui/TextInput';
import { Button, Input } from '@rneui/themed';

const AuthView = () => {
  return (
    <View>
      <Input label={'E-Mail'} />
      <Input label={'Password'} secureTextEntry />
      <Button title={'Sign In'} />
    </View>
  );
};

export default AuthView;
