import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

import Navigation from "~/components/Navigation"
import IntroPage from "~/pages/IntroPage"
import TemplatePage from "~/pages/TemplatePage"
import { persistor, store } from "~/store/store"

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
