import { PersistGate } from "redux-persist/integration/react"

import { Provider } from "~node_modules/react-redux/dist/react-redux"
import {
  BrowserRouter,
  Route,
  Routes
} from "~node_modules/react-router-dom/dist"
import Navigation from "~src/components/Navigation"
import IntroPage from "~src/pages/IntroPage"
import TemplatePage from "~src/pages/TemplatePage"
import { persistor, store } from "~src/store/store"

function IndexPopup() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/template" element={<TemplatePage />} />
            <Route path="/parcer" element={<TemplatePage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default IndexPopup
