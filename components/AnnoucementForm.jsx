import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Editor } from '@tinymce/tinymce-react';
import dynamic from 'next/dynamic';
// eslint-disable-next-line
/* eslint import/no-webpack-loader-syntax: off */
// import tinymce from "tinymce/tinymce";

const tinymce = dynamic(() => {
  import("tinymce/plugins/image")
})

console.log(tinymce)

export default function AnnouncementForm() {
  // const [value, setValue] = useState([])
  const [imageFile, setImageFile] = useState(null);
  const [submittedHTML, setSubmittedHTML] = useState("");





  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const router = useRouter()

  const createAnnouncement = async (data) => {
    console.log(data)


    setSubmittedHTML(message);

    const message = submittedHTML

    const { title, image, type } = data;
     console.log('img', imageFile)

     try {
        await fetch('/api/createAnnouncement', {
          method: 'POST',
          body: JSON.stringify({
            title,
            message,
            image,
            type
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        router.reload();
      } catch (err) {
         console.error(err);
      }
  };
  // const updateSnippet = async (data) => {
  //     const { locationName, address, city, name, zip } = data;
  //     const id = snippet.id;
  //     try {
  //         await fetch('api/updateSnippet', {
  //             method: 'PUT',
  //             body: JSON.stringify({ locationName, address, city, name, zip, id}),
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //         })
  //         router.push('/');
  //     } catch (err) {
  //         console.error(err);
  //     }
  // };

  return (
    <div>
      <form onSubmit={handleSubmit(createAnnouncement)}>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-bold text-red-800">
            Title
          </label>
          <input
            {...register('title', { required: 'Title is required' })}
            aria-invalid={errors.publication ? 'true' : 'false'}
            type="text"
            className="w-full px-3 py-2 text-gray-700 bg-white border rounded outline-none"
          />
          {errors.title && (
            <p className="font-bold text-red-900">
              {errors.title?.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-bold text-red-800">
            Message
          </label>
          <div className="mb-4">
   <Editor
     apiKey="8169yfots1j4d13l4ok0m6zt6ojj66dxncet6r3reehrlye7"
     plugins={'image'}
     value={submittedHTML}
     onEditorChange={(content) => setSubmittedHTML(content)}
   />
 </div>
        </div>
        <div className="mb-4">
        {/* TODO: Image upload */}
          <label className="block mb-1 text-sm font-bold text-red-800">
            Featured Image
          </label>
          <input
            aria-invalid={errors.publication ? 'true' : 'false'}
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full"
          />
          {errors.image && (
            <p className="font-bold text-red-900">
              {errors.image?.message}
            </p>
          )}
        </div>
        <div className="mb-4">
        <label
    htmlFor="countries"
    className="block mb-1 text-sm font-bold text-red-800"
  >
    Type
  </label>
  <select
  {...register('type', { required: 'Name is required' })}
            aria-invalid={errors.publication ? 'true' : 'false'}
    id="type"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected="">Choose an announcement type</option>
    <option value="ceo">CEO</option>
    <option value="hr">HR Update</option>
    <option value="announcement">Announcement</option>
    <option value="newsletter">Newsletter</option>
  </select>
  {errors.type && (
            <p className="font-bold text-red-900">
              {errors.type?.message}
            </p>
          )}
        </div>
        <button
          className="px-4 py-2 mr-2 font-bold text-white bg-red-800 rounded hover:bg-red-900 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
        <Link href="/">
          <a className="inline-block px-4 py-2 mt-3 font-bold text-white bg-red-800 rounded hover:bg-red-900 focus:outline-none focus:shadow-outline">
            Cancel
          </a>
        </Link>
      </form>
    </div>
  )
}
