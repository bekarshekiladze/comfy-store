import { useNavigation } from "react-router-dom";

export const SubmitBtn = ({ text }) => {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  const innerText = text || "submit";
  return (
    <button
      className={`btn btn-primary btn-block uppercase`}
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting && <span className="loading loading-spinner" />}
      {isSubmitting ? "sending..." : innerText}
    </button>
  );
};
