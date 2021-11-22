import React, { Component } from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import StarterKit from "@tiptap/starter-kit";
import { IconContext } from "react-icons";
import {
  FaRegLaughSquint,
  FaRegCalendarAlt,
  FaRegEye,
  FaBookmark,
  FaHashtag,
  FaRegComment,
  FaRegThumbsUp,
  FaRegHandPointRight,
} from "react-icons/fa";
export default class EditorComponent extends Component {
  MenuBar = ({ editor }) => {
    if (!editor) {
      return null;
    }

    return (
      <>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          h1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          h2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          h3
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          strike
        </button>
      </>
    );
  };
  render() {
    const editor = new useEditor({
      extensions: [StarterKit, Document],
      editorProps: {
        attributes: {
          class: "prose prose-sm max-w-none focus:outline-none p-10",
        },
      },
      autofocus: true,
      editable: true,
      content: `<h1>섹션 1</h1><hr /><p>내용을 입력하세요</p>`,
    });
    return (
      <div className="">
        <this.MenuBar editor={editor} />
        <EditorContent className="" editor={editor} />
      </div>
    );
  }
}
