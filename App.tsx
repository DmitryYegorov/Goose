import { QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthView from './src/views/AuthView';
import CreateProfileView from './src/views/CreateProfileView';
import { QueryClient } from 'react-query';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'AuthView'} component={AuthView} />
          <Stack.Screen
            name={'RegistrationView'}
            component={CreateProfileView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
