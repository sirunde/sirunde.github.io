import Link from "next/link";
import 'highlight.js/styles/github.css';

export default function Projects() {

  return(
    <ul>
    <li>
      <Link href="/chat">Chat</Link>
    </li>
    <li>
      <Link href="/file">File Uploader</Link>
    </li>
    <li>
      <Link href="projects/leetcode">Leetcode</Link>
    </li>
    <li>
      <Link href="projects/ocr">OCR</Link>
    </li>

    </ul>
  )
}
