import {
  createSlice,
  type PayloadAction
} from "~node_modules/@reduxjs/toolkit/dist"

interface Template {
  id: string
  title: string
  content: string
}

interface TemplatesState {
  templates: Template[]
  currentTemplateId: string | null
}

const initialState: TemplatesState = {
  templates: [],
  currentTemplateId: null
}

export const templateSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    updateTemplate: (
      state,
      action: PayloadAction<{ id: string } & Partial<Template>>
    ) => {
      const template = state.templates.find((t) => t.id === action.payload.id)

      if (template) {
        Object.assign(template, {
          ...action.payload
        })
      }
    },
    rehydrate: (state, action) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { updateTemplate } = templateSlice.actions

export default templateSlice.reducer
