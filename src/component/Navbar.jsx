import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Home from '../image/home.png'
import { Link } from 'react-router-dom'
import logobemaru from '../image/BEMARU2.png'

const navigation = [
  { name: 'Beranda', href: '/beranda', current: false },
  { name: 'Materi', href: '/materi', current: false },
  { name: 'Latihan Soal', href: '/latihansoal', current: false },
  { name: 'Kuis', href: '/kuis', current: false },
  { name: 'Forum Diskusi', href: '/forumdiskusi', current: false },
  { name: 'Referensi', href: '/referensi', current: false },
  { name: 'Bantuan', href: '/bantuan', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div className="w-full ">
      <div className="relative flex h-16 items-center justify-between ">
        <div className="flex flex-1 items-center">
          <div className="flex flex-shrink-0 items-center">
            <div className='flex flex-row gap-2 pb-1 items-center text-sm border-b-2 border-black'>
              <img
                className="h-12 w-auto pl-2"
                src={logobemaru}
                alt="Belajar Matematika Seru"
              />
              <div className='flex flex-col items-start'>
                <p className='font-bold'>BeMaRu</p>
                <p>Belajar Matematika Seru!</p>
              </div>
            </div>

          </div>

        </div>
        <div className="flex items-center pr-6">
          <Menu as="div" className="relative">
            <div>
              <MenuButton className="relative flex rounded-full text-sm">
                <img
                  className="h-5 w-5"
                  src="src/image/user.png"
                  alt=""
                />
                <body className='text-sm sm:ml-2'>
                  <p>Farhan</p>
                </body>
              </MenuButton>
            </div>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo=" opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href="#"
                      className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Your Profile
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href="#"
                      className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Settings
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href="#"
                      className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Sign out
                    </a>
                  )}
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="border-y-2 border-black mt-3">
        <div className="flex items-center space-x-2 pl-6">
          <Link to={"/"}>
            <img src={Home} alt="" className='w-6 h-6'/>
          </Link>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current ? 'bg-blue-500 text-white' : 'text-black hover:bg-blue-300 hover:text-black',
                'rounded-xl px-4 py-1 text-sm font-medium border border-black my-1',
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>

  )
}