import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

// Generate a random hex color
const getRandomHexColor = () => {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex.padStart(6, '0')}`;
};

// Generate the complementary (opposite) color
const getComplementaryColor = (hexColor: string) => {
  const color = hexColor.replace('#', '');
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  const compR = 255 - r;
  const compG = 255 - g;
  const compB = 255 - b;

  return (
    '#' +
    compR.toString(16).padStart(2, '0') +
    compG.toString(16).padStart(2, '0') +
    compB.toString(16).padStart(2, '0')
  );
};

const App = () => {
  const [bgColor, setBgColor] = useState(getRandomHexColor());
  const [textColor, setTextColor] = useState(getComplementaryColor(bgColor));

  const handlePress = () => {
    const newColor = getRandomHexColor();
    setBgColor(newColor);
    setTextColor(getComplementaryColor(newColor));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor }}>
      <Button title="Change Background" onPress={handlePress} />
      <Text style={{ color: textColor, marginTop: 20, fontSize: 18 }}>
        Click the button to change the background and text color!
      </Text>
    </View>
  );
};

export default App;
