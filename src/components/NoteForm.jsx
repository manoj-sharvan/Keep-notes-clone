import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addNote } from "../store/notesSlice";
const NoteForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const OnSubmit = (data) => {
    // onAddNote({
    //   title: data.title,
    //   content: data.content,
    // });
    // reset();

    dispatch(addNote({ title: data.title, content: data.content }));
  };

  const onError = (formErrors) => {
    if (formErrors.title) {
      toast.error(formErrors.title.message, { toastId: "form-err" });
    }
    if (formErrors.content) {
      toast.error(formErrors.content.message, { toastId: "form-err" });
    }
  };

  return (
    <div className="note-form-wrapper">
      <form
        className="note-form"
        onSubmit={handleSubmit(OnSubmit, onError)}
        style={{ background: "#ffff" }}
      >
        <input
          type="text"
          className="note-form-title"
          name="Title"
          placeholder="Title"
          {...register("title", {
            required: "Title is required",
            maxLength: {
              value: 50,
              message: "Title Cannot exceed 50 characters..",
            },
          })}
        />
        <textarea
          className="note-form-content"
          placeholder="Take a Note..."
          rows={3}
          {...register("content", {
            required: "Content is required",
            minLength: {
              value: 3,
              message: "content must be at least 3 characters..",
            },
          })}
        />
        <div className="note-form-footer">
          <button type="submit" className="btn-primary">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
