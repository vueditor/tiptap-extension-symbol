import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { symbol } from '../../..'
import './Editor.scss'

// define your extension array
const extensions = [StarterKit, symbol.configure({
  enableId: false,
  enableName: true,
})]
const content = '@vueditor/tiptap-extension-symbol'

export default function Editor() {
  return (
    <div className="editor">
      <EditorProvider extensions={extensions} content={content}>

      </EditorProvider>
    </div>
  )
}
