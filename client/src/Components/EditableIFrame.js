import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const md = require("markdown-it")().use(require("markdown-it-highlightjs"), {
  inline: true,
});

const EditableIFrame = ({ ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const [content, setContent] = useState("");
  const mountNode = contentRef?.contentWindow?.document?.body;
  // *testing
  console.log(
    "🚀 ~ file: EditableIFrame.js ~ line 11 ~ EditableIFrame ~ mountNode",
    mountNode
  );
  // *testing

  useEffect(() => {
    // if (mountNode) {
    var iFrame = document.getElementById("markdownIframe");
    // *testing
    console.log(
      "🚀 ~ file: EditableIFrame.js ~ line 49 ~ HandleInput ~ iFrame",
      iFrame
    );
    // *testing

    var doc;
    if (iFrame.contentDocument) {
      doc = iFrame.contentDocument;
    } else {
      doc = iFrame.contentWindow.document;
    }
    // *testing
    console.log(
      "🚀 ~ file: EditableIFrame.js ~ line 56 ~ HandleInput ~ doc",
      doc
    );
    // *testing
    var bodyEditable = doc.querySelector("body");
    if (bodyEditable) {
      bodyEditable.setAttribute("contenteditable", "true");
      bodyEditable.setAttribute("id", "iFrameContent");
      bodyEditable.addEventListener("keyup", handleContentChange);
    }
    // }
    // *testing
    console.log("mountNode: ", mountNode);
    // *testing
  }, [mountNode]);

  const handleContentChange = (e) => {
    // *testing
    console.log(
      "🚀 ~ file: EditableIFrame.js ~ line 52 ~ handleContentChange ~ e",
      e
    );
    // *testing
  };

  const CheckInput = () => {
    setContent();
    // *testing
    console.log("content: ", content);
    // *testing
  };

  const HandleInput = (e) => {
    // *testing
    console.log("LOADED");
    // *testing
  };
  return (
    <iframe
      id="markdownIframe"
      title="Editable iframe"
      sandbox="allow-same-origin"
      ref={setContentRef}
    >
      {mountNode && createPortal(content, mountNode)}
    </iframe>
  );
};

export default EditableIFrame;
