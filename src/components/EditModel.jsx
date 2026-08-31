import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { updateNote } from "../store/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectEditingNote, setEditingNote } from "../store/uiSlice";

const EditModel = ({ onSave }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const note = useSelector(selectEditingNote);
  const isOpen = Boolean(note);

  useEffect(() => {
    if (note) {
      setValue("title", note.title || "");
      setValue("content", note.content || "");
    }
  }, [note, reset]);

  if (!isOpen) return null;

  const OnSubmit = (data) => {
    // onSave(note.id, { title: data.title, content: data.content });
    dispatch(
      updateNote({
        id: note.id,
        updatedFields: { title: data.title, content: data.content },
      }),
    );
    dispatch(setEditingNote(null));
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
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Edit Note</h3>
          <button
            className="icon-btn"
            onClick={() => dispatch(setEditingNote(null))}
          >
            <MdClose />
          </button>
        </div>

        <form onSubmit={handleSubmit(OnSubmit, onError)}>
          <input
            type="text"
            className="note-form-title"
            placeholder="title"
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
            placeholder="Note..."
            rows={5}
            {...register("content", {
              required: "Content is required",
              minLength: {
                value: 3,
                message: "content must be at least 3 characters..",
              },
            })}
          ></textarea>

          <div className="modal-footer">
            <button
              className="btn-secondary"
              onClick={() => {
                dispatch(setEditingNote(null));
              }}
            >
              cancel
            </button>
            <button className="btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModel;
