import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { Amplify } from "aws-amplify";
import awsmobile from "./src/config/aws-export";

import AppContainer from "./src/navigation/AppContainer";
import store from "./src/store/store";

Amplify.configure(awsmobile);

export default function App() {
  console.log(awsmobile);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </Provider>
  );
}
