import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Home, Quiz, QuizPreview } from './quiz/components'
import { QuizFormDataState, QuizMultiPageDataState } from './quiz/context'
import { QUIZ_CONFIG_LIST } from './quiz/utils/quizConfig'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <QuizFormDataState>
              <App />
            </QuizFormDataState>
          }
        />
        <Route path="/home" element={<Home />} />

        {QUIZ_CONFIG_LIST.map(config => (
          <Route key={config.key} path={config.path}>
            <Route
              index
              element={
                <QuizMultiPageDataState>
                  <Quiz config={config} />
                </QuizMultiPageDataState>
              }
            />
            <Route path="preview" element={<QuizPreview config={config} />} />
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>
)