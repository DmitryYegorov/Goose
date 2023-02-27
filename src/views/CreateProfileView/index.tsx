import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@rneui/base';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from 'react-query';
import { createNewAccount } from '../../http/auth';
import { CreateNewAccount } from '../../http/auth/types';

const CreateProfileView = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onCreateAccountRequest = useMutation(async (data: CreateNewAccount) => {
    return createNewAccount(data);
  });

  if (onCreateAccountRequest.error) {
    // @ts-ignore
    Alert.alert(onCreateAccountRequest.error.response.data.message.join('; '));
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Controller
          render={({ field }) => (
            <Input label={'First name'} onChange={field.onChange} />
          )}
          name={'firstName'}
          control={control}
        />
        <Controller
          render={({ field }) => (
            <Input label={'Last name'} onChange={field.onChange} />
          )}
          name={'lastName'}
          control={control}
        />
        <Controller
          render={({ field }) => (
            <Input label={'E-Mail'} onChange={field.onChange} />
          )}
          name={'email'}
          control={control}
        />
        <Controller
          render={({ field }) => (
            <Input
              label={'Password'}
              secureTextEntry
              onChange={field.onChange}
            />
          )}
          name={'password'}
          control={control}
        />
        <Button
          title={'Complete'}
          onPress={handleSubmit((data) =>
            onCreateAccountRequest.mutate(data as CreateNewAccount),
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
  },
});

export default CreateProfileView;
