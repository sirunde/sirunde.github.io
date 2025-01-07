import ImageForm from "@/app/putimage/form"
import FolderSearch from "@/app/putimage/foldersearch"

export default function Home() {
  const folderslist = FolderSearch();
  console.log(folderslist)
  return (
    <main>
      <div>
      <ImageForm folders={folderslist}/>
      </div>
    </main>
  );
}
