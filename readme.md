```
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
```

[go to full documentation](https://medium.com/@marizu_makozi/navigating-between-screens-or-activities-using-react-navigation-library-68d57657d81)
