export default function join() {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/join`, {
    method: "POST",
  });
}
