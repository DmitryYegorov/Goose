import { TextInput as BaseTextInput } from 'react-native';

type Props = {
  type: 'text' | 'password';
  placeholder?: string;
};

const TextInput = (props: Props) => {
  return <BaseTextInput secureTextEntry={props.type === 'password'} placeholder={props.placeholder}/>;
};

export default TextInput;
