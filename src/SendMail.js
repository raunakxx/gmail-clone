import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice"; // Adjust the import path as necessary
import { db } from "./firebase";
import firebase from "./firebase";
function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <IconButton
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">Recipient is required</p>}

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required</p>
        )}

        <textarea
          name="message"
          placeholder="Message..."
          className="sendMail__message"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <p className="sendMail__error">Message is required</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SendMail;
