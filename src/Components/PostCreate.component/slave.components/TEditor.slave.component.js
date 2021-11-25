// src/Tiptap.jsx
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import CharacterCount from "@tiptap/extension-character-count";
import Blockquote from "@tiptap/extension-blockquote";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Code from "@tiptap/extension-code";
import LoadingComponent from "./Loading.slave.component";

// load all highlight.js languages
import lowlight from "lowlight";

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
  FaRegHandPointRight,
  FaHighlighter,
  FaAlignLeft,
  FaAlignJustify,
  FaAlignRight,
  FaPaperPlane,
} from "react-icons/fa";

const MenuBar = ({ editor }) => {
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

const Tiptap = (props) => {
  const CONTENT_LIMIT = 10000;
  let editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
      }),
      Document,
      Highlight,
      Typography,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CharacterCount.configure({
        CONTENT_LIMIT,
      }),
      Blockquote,
      CodeBlockLowlight.configure({ lowlight }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Code,
    ],
    editorProps: {
      attributes: {
        class:
          "w-full h-full p-4 prose prose-sm max-w-none focus:outline-none overflow-y-auto",
      },
    },
    autofocus: true,
    editable: true,
    content: props.getContent(),
  });

  const clickNextButton = async () => {
    // 상위 컴포넌트 메서드를 호출해 게시글 데이터를 동기화한다
    await props.setContent(editor.getJSON());

    // 등록 요청을 보낸다
    await props.setPostRequest();
  };

  return (
    <div>
      {props.isFetch ? <LoadingComponent /> : null}
      <MenuBar editor={editor} />
      <hr className="mt-2" />
      <EditorContent className="w-full h-full" editor={editor} />
      {/* content Limit alert 
      <div className="text-sm text-gray-300">
        {editor.getCharacterCount()} / {CONTENT_LIMIT} 자
      </div>
      */}
      {/* send Button */}
      <div className="flex flex-col fixed bottom-10 left-10 w-52">
        <div>
          <section className="container">
            <label
              for="checkbox"
              className="relative flex-inline items-center isolate p-4 rounded-3xl"
            >
              <input
                id="checkbox"
                type="checkbox"
                className="relative peer z-20 text-purple-600 rounded-md focus:ring-0"
                onChange={props.checkedPrivateBox}
              />
              <span className="ml-2 relative z-20 text-sm text-gray-400">
                비밀글 생성
              </span>
              <div className="w-52 absolute inset-0 bg-white peer-checked:bg-purple-50 peer-checked:border-purple-300 z-10 border"></div>
            </label>
          </section>
        </div>
        <button
          type="button"
          className="border text-gray-400 px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-black hover:border-black focus:outline-none focus:shadow-outline"
          onClick={clickNextButton}
        >
          <div className="flex flex-row flex-nowrap align-middle justify-center items-center ">
            {props.isFetch ? (
              <div className="flex items-center animate-pulse cursor-wait">
                <span className="text-sm">게시물을 보내는중</span>
                <IconContext.Provider value={{ className: "ml-2 w-6 h-6" }}>
                  <FaPaperPlane />
                </IconContext.Provider>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-sm">게시글 발행</span>
                <IconContext.Provider value={{ className: "ml-2 w-6 h-6" }}>
                  <FaRegHandPointRight />
                </IconContext.Provider>
              </div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export { Tiptap };
