import {WebView} from 'react-native-webview';
import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: 'blue'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <WebView
          source={{uri: 'https://webview-keyboard-issue.vercel.app', flex: 1}}
          style={{backgroundColor: 'red'}}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
