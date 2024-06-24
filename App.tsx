import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {ThemeContex} from './src/context/ThemeContex';
import {useState} from 'react';
import {myColors} from './src/styles/Color';
import Button from './src/component/Button';
import MyKeyboard from './src/component/MyKeyboard';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContex.Provider value={theme}>
        <View
          style={
            theme === 'light'
              ? [styles.container, {backgroundColor: myColors.dark}]
              : [styles.container, {backgroundColor: myColors.light}]
          }>
          <Switch
            value={theme === 'light'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />

          <MyKeyboard></MyKeyboard>
          {/* <Text
            style={theme === 'dark' ? [styles.lightText] : [styles.darkText]}>
            Hello!!
          </Text>
          <Button
            isBlue
            title="3"
            onPress={() => {
              console.log('Hello');
            }}></Button> */}
        </View>
      </ThemeContex.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

export default App;
