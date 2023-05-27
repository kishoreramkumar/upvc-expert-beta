import { useRef, useState, useEffect } from "react";

const Editors = () => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, Editor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };
    setEditorLoaded(true);
  }, []);

  const [data, setData] = useState("");

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={Editor}
          data={data}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setData(data);
          }}
        />
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export default Editors;
