
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { Header } from '../components';

const Editor = () => {
  const [content, setContent] = useState('');

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={{
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            [{ align: [] }],
            [{ color: [] }, { background: [] }],
            ['clean'],
          ],
        }}
        formats={[
          'header', 'font', 'list', 'bold', 'italic', 'underline', 'strike',
          'blockquote', 'code-block', 'link', 'image', 'align', 'color', 'background',
        ]}
        className="bg-white p-4 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default Editor;
