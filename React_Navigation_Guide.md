# Tài Liệu Tổng Hợp React Navigation

## Giới Thiệu

React Navigation là thư viện điều hướng phổ biến nhất cho React Native, cung cấp giải pháp điều hướng giữa các màn hình trong ứng dụng mobile. Thư viện được viết hoàn toàn bằng JavaScript và hoạt động trên cả iOS và Android.

**Nguồn tham khảo:** [React Navigation Official Documentation](https://reactnavigation.org)

## Yêu Cầu Tối Thiểu

- react-native >= 0.72.0
- expo >= 52 (nếu sử dụng Expo)
- typescript >= 5.0.0 (nếu sử dụng TypeScript)

## Cài Đặt

### 1. Cài đặt package chính

```bash
npm install @react-navigation/native
```

### 2. Cài đặt các dependencies cần thiết

```bash
# Với Expo
npx expo install react-native-screens react-native-safe-area-context

# Với React Native CLI
npm install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler react-native-reanimated
```

---

## Các Loại Navigation

React Navigation cung cấp 3 loại navigator chính:

### 1. Stack Navigator (Điều hướng chồng)

**Mô tả:** Giống như một chồng thẻ - khi mở màn hình mới, nó được đặt lên trên màn hình cũ. Nhấn nút "Back" sẽ loại bỏ màn hình trên cùng.

**Khi nào sử dụng:**
- Điều hướng tuần tự (đăng nhập → trang chủ → chi tiết)
- Luồng công việc có thứ tự cụ thể
- Màn hình chi tiết sản phẩm, profile, settings

**Cài đặt:**
```bash
npm install @react-navigation/native-stack
```

**Ví dụ cơ bản:**

```javascript
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Màn hình Home
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { itemId: 86 })}
      />
    </View>
  );
}

// Màn hình Details
function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', { itemId: Math.floor(Math.random() * 100) })}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Trang Chủ' }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
          options={{ title: 'Chi Tiết' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

**Các phương thức điều hướng:**
- `navigation.navigate('ScreenName')` - Đi đến màn hình
- `navigation.push('ScreenName')` - Thêm màn hình mới vào stack
- `navigation.goBack()` - Quay lại màn hình trước
- `navigation.popToTop()` - Quay về màn hình đầu tiên

---

### 2. Tab Navigator (Điều hướng tab)

**Mô tả:** Hiển thị các tab ở đầu hoặc cuối màn hình, cho phép người dùng chuyển đổi giữa các màn hình khác nhau.

**Khi nào sử dụng:**
- Các phần chính của ứng dụng (Home, Search, Profile)
- Nội dung không liên quan trực tiếp với nhau
- Cần truy cập nhanh giữa các màn hình

**Cài đặt:**
```bash
npm install @react-navigation/bottom-tabs
```

**Ví dụ Bottom Tab Navigator:**

```javascript
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Search Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Trang Chủ' }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ title: 'Tìm Kiếm' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Hồ Sơ' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

**Tùy chỉnh Tab Bar:**
```javascript
<Tab.Navigator
  screenOptions={{
    tabBarStyle: { backgroundColor: '#fff', height: 60 },
    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
    tabBarActiveTintColor: '#007AFF',
    tabBarInactiveTintColor: '#8E8E93',
  }}
>
  {/* Screens */}
</Tab.Navigator>
```

---

### 3. Drawer Navigator (Điều hướng ngăn kéo)

**Mô tả:** Menu trượt từ cạnh màn hình (thường là bên trái), hiển thị các tùy chọn điều hướng.

**Khi nào sử dụng:**
- Ứng dụng có nhiều phần không vừa trong tab bar
- Menu điều hướng phụ
- Settings, About, Logout

**Cài đặt:**
```bash
npm install @react-navigation/drawer
npm install react-native-gesture-handler react-native-reanimated
```

**Ví dụ Drawer Navigator:**

```javascript
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home Screen</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.openDrawer()}
      />
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Notifications Screen</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.openDrawer()}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Settings Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#f5f5f5',
            width: 240,
          },
          drawerActiveTintColor: '#007AFF',
          drawerInactiveTintColor: '#666',
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Trang Chủ' }}
        />
        <Drawer.Screen 
          name="Notifications" 
          component={NotificationsScreen}
          options={{ title: 'Thông Báo' }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{ title: 'Cài Đặt' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

**Các phương thức Drawer:**
- `navigation.openDrawer()` - Mở drawer
- `navigation.closeDrawer()` - Đóng drawer
- `navigation.toggleDrawer()` - Bật/tắt drawer

---

## Kết Hợp Các Navigator (Nested Navigation)

Trong thực tế, ứng dụng thường kết hợp nhiều loại navigator. Ví dụ: Tab Navigator chứa Stack Navigator trong mỗi tab.

**Ví dụ kết hợp Tab + Stack:**

```javascript
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Home Stack Screens
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Details Screen</Text>
    </View>
  );
}

// Settings Stack Screens
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Profile Screen</Text>
    </View>
  );
}

// Create Stack Navigators
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Trang Chủ' }} />
      <HomeStack.Screen name="Details" component={DetailsScreen} options={{ title: 'Chi Tiết' }} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsMain" component={SettingsScreen} options={{ title: 'Cài Đặt' }} />
      <SettingsStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Hồ Sơ' }} />
    </SettingsStack.Navigator>
  );
}

// Create Tab Navigator
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeStackScreen}
          options={{ headerShown: false, title: 'Trang Chủ' }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsStackScreen}
          options={{ headerShown: false, title: 'Cài Đặt' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

---

## Truyền Tham Số Giữa Các Màn Hình

### Gửi tham số:
```javascript
navigation.navigate('Details', {
  itemId: 86,
  otherParam: 'anything you want here',
});
```

### Nhận tham số:
```javascript
function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  
  return (
    <View>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
    </View>
  );
}
```

### Cập nhật tham số:
```javascript
navigation.setParams({
  itemId: 100,
});
```

---

## Tùy Chỉnh Header

### Thay đổi tiêu đề:
```javascript
<Stack.Screen 
  name="Home" 
  component={HomeScreen}
  options={{ title: 'Trang Chủ Của Tôi' }}
/>
```

### Tùy chỉnh style:
```javascript
<Stack.Screen 
  name="Home" 
  component={HomeScreen}
  options={{
    title: 'Trang Chủ',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
/>
```

### Thêm nút vào header:
```javascript
<Stack.Screen 
  name="Home" 
  component={HomeScreen}
  options={({ navigation }) => ({
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  })}
/>
```

### Ẩn header:
```javascript
<Stack.Screen 
  name="Home" 
  component={HomeScreen}
  options={{ headerShown: false }}
/>
```

---

## Các Phương Thức Navigation Phổ Biến

```javascript
// Điều hướng đến màn hình
navigation.navigate('ScreenName');

// Điều hướng với tham số
navigation.navigate('ScreenName', { param1: 'value1' });

// Thêm màn hình mới vào stack
navigation.push('ScreenName');

// Quay lại màn hình trước
navigation.goBack();

// Quay về màn hình đầu tiên
navigation.popToTop();

// Thay thế màn hình hiện tại
navigation.replace('ScreenName');

// Reset navigation state
navigation.reset({
  index: 0,
  routes: [{ name: 'Home' }],
});
```

---

## Best Practices (Thực Hành Tốt)

1. **Tách navigation logic:** Tạo file riêng cho navigation configuration
2. **Sử dụng TypeScript:** Để type-safe navigation
3. **Lazy loading:** Load màn hình khi cần thiết
4. **Deep linking:** Hỗ trợ mở ứng dụng từ URL
5. **Authentication flow:** Tách stack cho đăng nhập và màn hình chính
6. **Tối ưu performance:** Sử dụng `React.memo()` cho các màn hình

---

## Ví Dụ Hoàn Chỉnh: Ứng Dụng E-Commerce

```javascript
import * as React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Product List Screen
function ProductListScreen({ navigation }) {
  const products = [
    { id: '1', name: 'iPhone 15', price: '999$' },
    { id: '2', name: 'Samsung S24', price: '899$' },
    { id: '3', name: 'iPad Pro', price: '1299$' },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 15, borderBottomWidth: 1, borderColor: '#ccc' }}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            <Text style={{ color: '#666' }}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Product Detail Screen
function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}>
        {product.name}
      </Text>
      <Text style={{ fontSize: 24, color: '#007AFF', marginBottom: 20 }}>
        {product.price}
      </Text>
      <Button
        title="Add to Cart"
        onPress={() => {
          alert('Added to cart!');
          navigation.navigate('Cart');
        }}
      />
    </View>
  );
}

// Cart Screen
function CartScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Your Cart</Text>
      <Text style={{ marginTop: 10, color: '#666' }}>No items yet</Text>
    </View>
  );
}

// Profile Screen
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>User Profile</Text>
    </View>
  );
}

// Create Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ProductList" 
        component={ProductListScreen}
        options={{ title: 'Products' }}
      />
      <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetailScreen}
        options={{ title: 'Product Details' }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Shop" 
          component={ShopStack}
          options={{ headerShown: false, title: 'Shop' }}
        />
        <Tab.Screen 
          name="Cart" 
          component={CartScreen}
          options={{ title: 'Cart' }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

---

## Tài Liệu Tham Khảo

- [React Navigation Official Docs](https://reactnavigation.org)
- [React Native Documentation](https://reactnative.dev)
- [Expo Documentation](https://docs.expo.dev)

---

**Lưu ý:** Nội dung được tổng hợp và diễn giải lại từ tài liệu chính thức của React Navigation để tuân thủ yêu cầu bản quyền.
