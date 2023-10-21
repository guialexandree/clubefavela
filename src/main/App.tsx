import { Router, ThemeProvider } from '@/presentation/components'
import { AppRegistry } from 'react-native'
import app from '../../app.json'

export default function App() {
  return (
		<ThemeProvider>
			<Router />
		</ThemeProvider>
  )
}

AppRegistry.registerComponent(app.expo.name, () => App)