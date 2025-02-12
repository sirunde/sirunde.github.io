import Link from "next/link";
import 'highlight.js/styles/github.css';

export default function Projects() {
  const navigation = [
    { name: 'chat', href: `/chat`},
    { name: 'leetcode', href: `/projects/leetcode`},
    { name: 'linear classification', href: `/projects/lc`},
    { name: 'file', href: `/file`},
  ]
  return(
    <div className="flex flex-col gap-2">
      <a>For now, you have to the link, but I will implement blog style.</a>
      
    {navigation.map((item) => (
      <Link key={item.name} href={`${item.href}`} className="text-base font-semibold leading-6 text-gray-900  hover:ease-in hover:text-lg">
        {item.name}
      </Link>
    ))}
  </div>
  )
}
