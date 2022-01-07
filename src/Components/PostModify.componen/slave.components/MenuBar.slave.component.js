import React from "react";

import { IconContext } from "react-icons";
import {
  BsTypeBold,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsTypeItalic,
  BsTypeStrikethrough,
} from "react-icons/bs";
import {
  FaHighlighter,
  FaAlignLeft,
  FaAlignJustify,
  FaAlignRight,
} from "react-icons/fa";
export default function MenuBar({ editor }) {
    if (!editor) {
      return null;
    }
  
    return (
      <div className="flex my-5">
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={
            editor.isActive("heading", { level: 1 }) ? "flex is-active" : "flex"
          }
        >
          <IconContext.Provider
            value={{ className: "mr-3 w-6 h-6 text-gray-600" }}
          >
            <BsTypeH1 />
          </IconContext.Provider>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={
            editor.isActive("heading", { level: 2 }) ? "flex is-active" : "flex"
          }
        >
          <IconContext.Provider
            value={{ className: "mr-3 w-6 h-6 text-gray-600" }}
          >
            <BsTypeH2 />
          </IconContext.Provider>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={
            editor.isActive("heading", { level: 3 }) ? "flex is-active" : "flex"
          }
        >
          <IconContext.Provider
            value={{ className: "mr-3 w-6 h-6 text-gray-600" }}
          >
            <BsTypeH3 />
          </IconContext.Provider>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "flex is-active" : "flex"}
        >
          <IconContext.Provider value={{ className: "w-6 h-6 text-gray-600" }}>
            <BsTypeBold />
          </IconContext.Provider>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "flex is-active" : "flex"}
        >
          <IconContext.Provider value={{ className: "w-6 h-6 text-gray-600" }}>
            <BsTypeItalic />
          </IconContext.Provider>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "flex is-active" : "flex"}
        >
          <IconContext.Provider
            value={{ className: "mr-2 w-6 h-6 text-gray-600" }}
          >
            <BsTypeStrikethrough />
          </IconContext.Provider>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive("strike") ? "flex is-active" : "flex"}
        >
          <IconContext.Provider
            value={{ className: "mr-2 w-6 h-6 text-gray-600" }}
          >
            <FaHighlighter />
          </IconContext.Provider>
        </button>
  
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive("strike") ? "flex is-active" : "flex"}
        >
          <IconContext.Provider
            value={{ className: "mr-2 w-6 h-6 text-gray-600" }}
          >
            <FaAlignLeft />
          </IconContext.Provider>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={editor.isActive("strike") ? "flex is-active" : "flex"}
        >
          <IconContext.Provider
            value={{ className: "mr-2 w-6 h-6 text-gray-600" }}
          >
            <FaAlignJustify />
          </IconContext.Provider>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive("strike") ? "flex is-active" : "flex"}
        >
          <IconContext.Provider
            value={{ className: "mr-2 w-6 h-6 text-gray-600" }}
          >
            <FaAlignRight />
          </IconContext.Provider>
        </button>
      </div>
    );
  };