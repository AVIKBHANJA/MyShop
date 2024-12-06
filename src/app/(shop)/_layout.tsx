import { Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";

const TabsLayout=()=>{
    return(<SafeAreaView style={styles.safeArea}>
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#1BC464',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingTop: 10,
            },
            headerShown:false,

        }}>    
        <Tabs.Screen name="index"
        options={{
            headerShown:false,
        }}
        />
        <Tabs.Screen name="orders"
        options={{}}
        />

    </Tabs>
    </SafeAreaView>)
};

export default TabsLayout;