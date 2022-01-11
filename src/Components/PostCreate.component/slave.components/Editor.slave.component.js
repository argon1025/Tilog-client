import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
// import { uploadImage } from "../../../utilities/api/TILog/upload";

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
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";

// load all highlight.js languages
import lowlight from "lowlight";

import { IconContext } from "react-icons";
import { FaRegHandPointRight, FaPaperPlane } from "react-icons/fa";
import MenuBar from "./MenuBar.slave.component";

export default function Tiptap(props) {
  const CONTENT_LIMIT = 10000;

  // 에디터 초기화
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
      Image,
      Dropcursor,
    ],
    editorProps: {
      attributes: {
        class:
          "w-full h-full p-10 prose prose-sm max-w-none focus:outline-none overflow-y-auto prose-img:ml-auto prose-img:mr-auto prose-img:border prose-img:border-gray-200",
      },
      transformPasted: (slice) => {
        const result = slice.content.content.map((node) => {
          if (node.type.name === "image" && node.attrs.src.includes("data:")) {
            node.attrs.src =
              "https://cdn.dribbble.com/users/4841378/screenshots/13921868/media/cea5408c3416011ae98e7c16658664df.png";
            return node;
          } else {
            return node;
          }
        });
        slice.content.content = result;
        return slice;
      },
    },
    autofocus: true,
    editable: true,
    content: props.getContent(),
  });

  // 이미지 업로드 컨테이너 메서드와 연결
  const imageUpload = async (blob) => {
    try {
      const result = await props.imageUpload(blob);
      editor.chain().focus().setImage({ src: result }).run();
    } catch (error) {
      console.log("Image Upload failed");
    }
  };

  // 드래그 드롭 이미지 업로드 이벤트
  const onDrop = useCallback(
    async (acceptedFiles) => {
      await imageUpload(acceptedFiles);
    },
    [editor]
  );

  // 페이스트 이미지 업로드 이벤트
  const onPaste = useCallback(
    async (event) => {
      event.preventDefault();

      // 이벤트에서 파일 데이터를 가져온다
      const pasteItem = event.clipboardData.items[0];

      // 파일 타입이 image일 경우에만 작업을 시작한다
      if (pasteItem.type.includes("image")) {
        const blob = pasteItem.getAsFile();
        // imageUpload 메서드가 Array<Blob> 을 필요합니다
        await imageUpload([blob]);
      }
    },
    [editor]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // 등록요청 버튼 이벤트
  const clickNextButton = async () => {
    // 상위 컴포넌트 메서드를 호출해 게시글 데이터를 동기화한다
    await props.setContent(editor.getJSON());

    // 등록 요청을 보낸다
    props.openAddStepModal();
    // await props.setPostRequest();
  };

  return (
    <div {...getRootProps()} className="flex flex-col flex-1" onPaste={onPaste}>
      {props.isFetch ? <LoadingComponent /> : null}
      <div className="ml-10">
        <MenuBar editor={editor} />
      </div>
      <hr className="mt-2" />
      <div className="flex justify-center p-5 flex-1 bg-gray-50">
        <EditorContent
          className="max-w-4xl w-full h-full bg-white"
          editor={editor}
        />
      </div>
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
              className="relative flex-inline items-center isolate p-4 rounded-3xl cursor-pointer"
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
}

export { Tiptap };
