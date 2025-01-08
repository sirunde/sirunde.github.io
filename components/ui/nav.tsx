'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { DialogPanel } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
const navigation = [
  { name: 'TYPING', href: '/typing' },
  { name: 'FILE UPLOADER', href: '/' },
  {name: 'CHAT', href: '/chat'},
  // { name: 'Necklace', href: '#' },
]

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <header>
        <nav className="flex items-center justify-between p-2 md:px-8" aria-label="Global">
          <div className="flex md:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sirunde</span>
              <img
                className="h-8 w-auto"
                src="/IzBRmk.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
              
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex md:gap-x-12 ">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900  hover:font-extrabold">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-end">
            <a href="login" className="text-sm font-semibold leading-6 text-gray-900">
              Login <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="sm:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Main Logo</span>
                <Image
                  className="h-8 w-auto"
                  src="/IzBRmk.jpg"
                  alt='Logo'
                  width={32}
                  height={32}
                  quality={1}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}

export default Nav