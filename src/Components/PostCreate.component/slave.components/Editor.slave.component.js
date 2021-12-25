import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { uploadImage } from "../../../utilities/api/TILog/upload";

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

// DataURL to fileData
function blobCreationFromURL(inputURI) {
  var binaryVal;

  // mime extension extraction
  var inputMIME = inputURI.split(",")[0].split(":")[1].split(";")[0];

  // Extract remaining part of URL and convert it to binary value
  if (inputURI.split(",")[0].indexOf("base64") >= 0)
    binaryVal = atob(inputURI.split(",")[1]);
  // Decoding of base64 encoded string
  else binaryVal = unescape(inputURI.split(",")[1]);

  // Computation of new string in which hexadecimal
  // escape sequences are replaced by the character
  // it represents

  // Store the bytes of the string to a typed array
  var blobArray = [];
  for (var index = 0; index < binaryVal.length; index++) {
    blobArray.push(binaryVal.charCodeAt(index));
  }

  return new Blob([blobArray], {
    type: inputMIME,
  });
}

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
          "w-full h-full p-4 prose prose-sm max-w-none focus:outline-none overflow-y-auto prose-img:ml-auto prose-img:mr-auto prose-img:border prose-img:border-gray-200",
      },
      transformPasted: (slice) => {
        console.log(slice);
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
        console.log(slice);
        return slice;
      },
    },
    autofocus: true,
    editable: true,
    content: props.getContent(),
  });

  // 드래그 드롭 이미지 업로드 이벤트
  const onDrop = useCallback(
    async (acceptedFiles) => {
      const result = await props.imageUpload(acceptedFiles);

      editor.chain().focus().setImage({ src: result }).run();
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

  const setImage = (rul) => {
    editor.commands.setImage({ src: rul });
  };

  return (
    <div {...getRootProps()}>
      {props.isFetch ? <LoadingComponent /> : null}
      <MenuBar editor={editor} />
      <hr className="mt-2" />
      <div className="mt-10 flex flex-col w-full justify-center items-center">
        <EditorContent className="max-w-4xl w-full h-full" editor={editor} />
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
