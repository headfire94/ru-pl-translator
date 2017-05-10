# Description
Simple translator app build with React-Native, Redux, NativeBase, React Native Router Flux. 

It uses yandex API to translate from Russian to English and Polish and back, also it provides the ability to add translation in learning list
# Motivation
Direct translation from Russian to Polish doesn't work as good as it can be (using google or yandex api), but en-pl translator works good. 
It's not convenient to open two different translators and switch them.
# Demo
Use Expo app: https://exp.host/@headfire94/ru-pl-translator
# Local setup
1. connect smartphone and laptop to WiFi
2. react-devtools: https://github.com/jhen0409/react-native-debugger/blob/master/docs/troubleshooting.md
3. adb reverse tcp:19001 tcp:19001
4. yarn start
5. open Expo app with provided link
