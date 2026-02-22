import { useNavigation } from "react-router-dom";

function SubmitBtn({ text }) {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  // const isSubmitting = true;
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
}
export default SubmitBtn;
