import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Clipboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "./styles";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "~`! @#$%^&*()_-+={[}]|:;'<,>.?/";

    let validChars = "";
    if (includeLowercase) validChars += lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    if (passwordLength < 6 || passwordLength > 16) {
      setPassword("Password length must be between 6 and 16 characters.");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyPassword = () => {
    if (password) {
      Clipboard.setString(password);
      alert("Password copied to clipboard!");
    }
  };

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.headingText}>Password generator</Text>
        <View style={styles.generated}>
          <Text>{password}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={copyPassword}>
            <Icon name="clipboard" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={generatePassword}>
            <Icon name="refresh" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{marginTop:20}}>
        <View style={styles.inputBox}>
          <Text style={styles.inputBoxText}>Password length</Text>
          <TextInput
            placeholder="eg: 8"
            style={styles.input}
            value={passwordLength.toString()}
            onChangeText={(value) => setPasswordLength(parseInt(value) || 0)}
            inputMode="numeric"
          />
        </View>
        {[
          {
            label: "Lower case",
            state: includeLowercase,
            setState: setIncludeLowercase,
          },
          {
            label: "Uppercase",
            state: includeUppercase,
            setState: setIncludeUppercase,
          },
          {
            label: "Numbers",
            state: includeNumbers,
            setState: setIncludeNumbers,
          },
          {
            label: "Symbols",
            state: includeSymbols,
            setState: setIncludeSymbols,
          },
        ].map((checkbox, index) => (
          <View style={styles.inputBox} key={index}>
            <Text style={styles.inputBoxText}>{checkbox.label}</Text>
            <BouncyCheckbox
              size={25}
              fillColor="#FF9201"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "#FF9201" }}
              innerIconStyle={{ borderWidth: 2 }}
              isChecked={checkbox.state}
              onPress={() => checkbox.setState(!checkbox.state)}
            />
          </View>
        ))}
      </View>
      </View>
    </View>
  );
};

export default App;
