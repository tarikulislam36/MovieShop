import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import "./global.css"


const _layout = () => {
  return (

    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center bg-red-900">
        <Text className="text-xl font-bold text-red-500">
          Welcome to Nativewind!
        </Text>
      </View>
    </SafeAreaView>

  )
}

export default _layout