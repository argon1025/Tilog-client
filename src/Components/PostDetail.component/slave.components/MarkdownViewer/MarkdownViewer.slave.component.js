import React from "react";
// src/Tiptap.jsx
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import Blockquote from "@tiptap/extension-blockquote";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Code from "@tiptap/extension-code";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
import Link from "@tiptap/extension-link";

// load all highlight.js languages
import lowlight from "lowlight";

export default function Tiptap(contentData) {
  const stringToJson = (contentData) => {
    try {
      const markdownContentData = JSON.parse(contentData);
      return markdownContentData;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  };
  let editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
      }),
      Link,
      Document,
      Highlight,
      Typography,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Blockquote,
      CodeBlockLowlight.configure({ lowlight }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Code,
      Image,
      Dropcursor,
    ],
    editorProps: {
      attributes: {
        class:
          "w-full h-full p-4 prose prose-sm max-w-none focus:outline-none overflow-y-auto prose-img:ml-auto prose-img:mr-auto prose-img:border prose-img:border-gray-200 dark:prose-invert dark:bg-gray-900 dark:prose-img:border-gray-700",
      },
    },
    autofocus: true,
    editable: false,
    content: stringToJson(contentData.contentData),
  });

  return (
    <div>
      <EditorContent className="w-full h-full" editor={editor} />
    </div>
  );
}

export { Tiptap };
