import { ApplicationProvider } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import { default as kitten_theme } from './kitten-theme.json'
import MainNavigator from './navigation/navigator/MainNavigator'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {

  return (
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...kitten_theme }}>
          <Provider store={store}>
              <MainNavigator/>
          </Provider>
      </ApplicationProvider>
  )
}

export default App
