import ImageForm from "@/app/file/form"
import FolderSearch from "@/app/file/foldersearch"
import Chat from "@/app/chat/chat"
export default function Home() {
  const folderslist = FolderSearch();
  console.log(folderslist)
  return (
    <main>
      <Chat/>
    </main>
  );
}
