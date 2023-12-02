import { revalidatePath } from "next/cache";

export default async function MyPageButton() {
  return (
    <a
      href="/my-page"
      className="my-page-button"
      style={{ whiteSpace: "nowrap", display: "inline-flex" }}
      onClick={revalidatePath("/my-page")}
    >
      My page
    </a>
  );
}
