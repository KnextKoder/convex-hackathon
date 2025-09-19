import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-900 justify-center items-center">
        <View className="bg-slate-800 p-8 rounded-2xl shadow-lg">
          <Text className="text-3xl font-bold text-center text-red-500 mb-2">
            Hello, world!
          </Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
