import {useContext} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {ThemeContex} from '../context/ThemeContex';
import {Styles1} from '../styles/GlobalStyleSheet';

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: Boolean;
  isGray?: Boolean;
}
export default function Button({title, onPress, isBlue, isGray}: ButtonProps) {
  const theme = useContext(ThemeContex);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles1.btnBlue
          : isGray
          ? Styles1.btnGray
          : theme === 'light'
          ? Styles1.btnLight
          : Styles1.btnDark
      }
      onPress={onPress}>
      <Text
        style={
          isBlue || isGray
            ? Styles1.smallTextLight
            : theme === 'dark'
            ? Styles1.smallTextLight
            : Styles1.smallTextDark
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
