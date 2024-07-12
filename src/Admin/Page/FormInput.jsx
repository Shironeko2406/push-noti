import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const FormInput = () => {
  const [description, setDescription] = useState("");

  const handleEditorChange = (content) => {
    setDescription(content);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     // Parse the HTML content to get plain text
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(description, 'text/html');
  const plainText = parsedHtml.body.textContent || "";
  
  console.log("Project Description:", plainText);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Edit Project</div>
        <div className="card-body">
          <form id="editProjectForm" onSubmit={handleSubmit}>
            {/* <div className="form-group">
              <label htmlFor="projectId">Project ID</label>
              <input
                type="text"
                className="form-control"
                id="projectId"
                name="projectId"
                defaultValue={678}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                className="form-control"
                id="projectName"
                name="projectName"
                defaultValue="BigProject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectCategory">Project Category</label>
              <select
                className="form-control"
                id="projectCategory"
                name="projectCategory"
              >
                <option value="web">Dự án web</option>
                <option value="mobile">Dự án di động</option>
              </select>
            </div> */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              {/* <Editor
                apiKey="8ca3emh2vyuloam1fyejbbjecckndq0aahi6hf5pso51iduu"
                id="description"
                initialValue=""
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount"
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help"
                }}
                onEditorChange={handleEditorChange}
              /> */}
              <Editor
              id="description"
                apiKey="8ca3emh2vyuloam1fyejbbjecckndq0aahi6hf5pso51iduu"
                init={{
                  menubar: false,  
                  plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                  tinycomments_mode: "embedded",
                  tinycomments_author: "Author name",
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],
                  ai_request: (request, respondWith) =>
                    respondWith.string(() =>
                      Promise.reject("See docs to implement AI Assistant")
                    ),
                }}
                initialValue=""
                onEditorChange={handleEditorChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
