createStackNavigator : createStackNavigator is a function that takes a route configuration object and an options object and returns a React component. Basically here we are maintaining the route information for different screen or activity.
navigation prop : The navigation prop is available to all screen components, that helps for screen navigation.
this.props.navigation.navigate(‘RouteName’) : pushes a new route to the stack navigator if it’s not already in the stack, otherwise it jumps to that screen and pops the already open screen.
this.props.navigation.push(‘RouteName’) : pushes a new route to the stack navigator even if already present in the stack.
this.props.navigation.goBack() : when you switch to new window using stack navigator, then it will automatically enabled the back button in header bar.(On Android, the hardware back button just works as expected.) Also you can do the same programmatically by calling the goBack() function.
this.props.navigation.popToTop() : This function helps to switch back to the home or first screen of your react native application.

'''
<Button
title="Go to Home"
onPress={() => this.props.navigation.navigate("Home")}
/>
<Text style={styles.headerText}>Create a New Profile Screen </Text>
<Button
title="Go to new Profile"
onPress={() => this.props.navigation.push("Profile")}
/>
<Text style={styles.headerText}> Go Back </Text>
<Button
title="Go Back"
onPress={() => this.props.navigation.goBack()}
/>
'''

[I'm an inline-style link](https://medium.com/@marizu_makozi/navigating-between-screens-or-activities-using-react-navigation-library-68d57657d81)
